/*
 * Service Worker de ExamMaster.
 *
 * Estrategia deliberadamente conservadora para una app con datos de examen en vivo:
 *  - Precache mínimo: la página /offline y los iconos.
 *  - Estáticos de Next (/_next/static, iconos, fuentes): cache-first (son inmutables,
 *    llevan hash en la URL).
 *  - Navegaciones (HTML) públicas: network-first con fallback a /offline si no hay conexión.
 *  - Navegaciones a rutas privadas (perfil, admin, estadísticas, intentos de examen):
 *    NUNCA se cachean ni se sirven desde caché. Cache Storage no está atado a la cookie
 *    de sesión: si se cacheara, un segundo usuario del mismo dispositivo (ordenador
 *    compartido) podría ver esas páginas ya cerrada la sesión, sin pasar por el
 *    middleware ni por la comprobación de servidor. Se van directas a /offline si falla la red.
 *  - NUNCA se cachean: peticiones no-GET, /api/*, ni nada con cookies de sesión en juego.
 *  - Actualizaciones automáticas: skipWaiting + clients.claim y limpieza de cachés viejas
 *    (subir VERSION purga también cualquier página privada cacheada por una versión anterior).
 */
const VERSION = "v2";
const STATIC_CACHE = `exammaster-static-${VERSION}`;
const PAGES_CACHE = `exammaster-pages-${VERSION}`;
const OFFLINE_URL = "/offline";

// Mismas rutas que exigen sesión en proxy.ts: su HTML nunca debe acabar en Cache Storage.
const PRIVATE_PATH_PREFIXES = [
  "/perfil",
  "/admin",
  "/estadisticas",
  "/simulador/intentos",
];

function isPrivatePath(pathname) {
  return PRIVATE_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

const PRECACHE_URLS = [
  OFFLINE_URL,
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith("exammaster-") && !key.endsWith(VERSION))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

function isStaticAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname === "/favicon.ico"
  );
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  // Estáticos inmutables: cache-first.
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response.ok) cache.put(request, response.clone());
        return response;
      }),
    );
    return;
  }

  // Navegaciones a rutas privadas: nunca se cachean ni se sirven desde caché.
  // Solo network, con /offline como fallback si falla (nunca una copia guardada de HTML privado).
  if (request.mode === "navigate" && isPrivatePath(url.pathname)) {
    event.respondWith(
      fetch(request).catch(async () => {
        const offline = await caches.match(OFFLINE_URL);
        return offline ?? Response.error();
      }),
    );
    return;
  }

  // Navegaciones públicas: network-first, fallback a la última copia o a /offline.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          if (response.ok) {
            const cache = await caches.open(PAGES_CACHE);
            cache.put(request, response.clone());
          }
          return response;
        } catch {
          const cache = await caches.open(PAGES_CACHE);
          const cached = await cache.match(request);
          if (cached) return cached;
          const offline = await caches.match(OFFLINE_URL);
          return offline ?? Response.error();
        }
      })(),
    );
  }
});
