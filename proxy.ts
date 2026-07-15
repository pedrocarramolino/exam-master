import { type NextRequest } from 'next/server';

import { protectRoute } from '@/infrastructure/firebase/proxy';

export async function proxy(request: NextRequest) {
  return protectRoute(request);
}

// Rutas que exigen sesión. /admin además comprueba el rol ADMIN en su layout.
// El catálogo del simulador (/simulador, /categorias, /grupos, /ediciones, /examenes)
// es público a propósito; solo tomar/revisar un intento exige login.
export const config = {
  matcher: [
    '/perfil/:path*',
    '/admin/:path*',
    '/simulador/intentos/:path*',
    '/estadisticas/:path*',
  ],
};
