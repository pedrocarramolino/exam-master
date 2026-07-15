'use client';

import { useEffect } from 'react';

/**
 * Registra el service worker en producción. `updateViaCache: "none"` fuerza a
 * comprobar sw.js en el servidor en cada carga: junto con skipWaiting en el SW,
 * es lo que da las actualizaciones automáticas.
 */
export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    if (!('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' }).catch(() => {
      // Sin SW la app sigue funcionando; no bloqueamos nada por esto.
    });
  }, []);

  return null;
}
