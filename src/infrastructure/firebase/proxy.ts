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
      // checkRevoked=true: sin esto, una sesión cerrada (revokeRefreshTokens en logout)
      // seguiría pasando el middleware hasta que expirase la cookie (14 días), igual que
      // getCurrentUser() en session.ts. Las páginas ya vuelven a comprobarlo, pero el
      // middleware no debe ser el eslabón débil de esa cadena.
      await firebaseAdminAuth.verifySessionCookie(sessionCookie, true);
      return NextResponse.next();
    } catch {
      // Cookie ausente, caducada o revocada: cae al redirect de abajo.
    }
  }

  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}
