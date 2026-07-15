import { NextResponse, type NextRequest } from 'next/server';

import { firebaseAdminAuth } from '@/infrastructure/firebase/admin';
import { SESSION_COOKIE_NAME } from '@/infrastructure/firebase/session';

/**
 * Redirige a /login si la ruta requiere sesión y la cookie de sesión falta o no es válida.
 * El matcher en el proxy.ts de la raíz decide a qué rutas se aplica esto.
 */
export async function protectRoute(request: NextRequest): Promise<NextResponse> {
  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value;

  if (sessionCookie) {
    try {
      await firebaseAdminAuth.verifySessionCookie(sessionCookie);
      return NextResponse.next();
    } catch {
      // Cookie ausente, caducada o revocada: cae al redirect de abajo.
    }
  }

  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}
