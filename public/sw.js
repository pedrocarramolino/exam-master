/*
 * Service Worker de ExamMaster.
 *
 * Estrategia deliberadamente conservadora para una app con datos de examen en vivo:
 *  - Precache mínimo: la página /offline y los iconos.
 *  - Estáticos de Next (/_next/static, iconos, fuentes): cache-first (son inmutables,
 *    llevan hash en la URL).
 *  - Navegaciones (HTML): SIEMPRE solo red, con fallback a /offline si falla. NUNCA se
 *    cachean ni se sirven desde caché — ni siquiera las públicas. Next.js las sirve con
 *    streaming (Suspense/loading.tsx: la respuesta llega en varios chunks a lo largo del
 *    tiempo, no de golpe). cache.put(response.clone()) hace tee() del stream para leerlo
 *    dos veces a la vez; en la práctica eso deja la página colgada mostrando el skeleton
 *    de loading.tsx para siempre en vez de completar el streaming (bug real, reproducido:
 *    v2 rompía /simulador y cualquier ruta con loading.tsx). No merece la pena cachear
 *    HTML para ganar soporte offline si el coste es que la app pueda quedarse colgada
 *    con conexión normal.
 *  - NUNCA se cachean: peticiones no-GET, /api/*, ni nada con cookies de sesión en juego.
 *  - Actualizaciones automáticas: skipWaiting + clients.claim y limpieza de cachés viejas
 *    (subir VERSION purga cualquier página cacheada por una versión anterior, incluida
 *    cualquier copia ya atascada de v2).
 */
const VERSION = "v3";
const STATIC_CACHE = `exammaster-static-${VERSION}`;
const OFFLINE_URL = "/offline";

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

  // Navegaciones (cualquier ruta, pública o privada): solo red, sin caché de por medio,
  // para no tocar el stream de la respuesta. Fallback a /offline solo si la red falla.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const offline = await caches.match(OFFLINE_URL);
        return offline ?? Response.error();
      }),
    );
  }
});
