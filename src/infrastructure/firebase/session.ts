import 'server-only';

import { cookies } from 'next/headers';

import { firebaseAdminAuth } from '@/infrastructure/firebase/admin';

export const SESSION_COOKIE_NAME = 'session';
export const SESSION_MAX_AGE_SECONDS = 14 * 24 * 60 * 60; // 14 días
const SESSION_EXPIRES_IN_MS = SESSION_MAX_AGE_SECONDS * 1000;

export interface SessionUser {
  id: string;
  email: string;
  displayName: string | null;
}

/**
 * Cambia un ID token (del SDK cliente) por una cookie de sesión httpOnly de larga duración,
 * verificable en servidor sin depender de JavaScript en el cliente.
 */
export async function createSessionCookie(idToken: string): Promise<string> {
  return firebaseAdminAuth.createSessionCookie(idToken, { expiresIn: SESSION_EXPIRES_IN_MS });
}

/**
 * Lee y verifica la cookie de sesión de la request actual.
 * Devuelve `null` si no hay sesión o no es válida (nunca lanza).
 */
export async function getCurrentUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!sessionCookie) return null;

  try {
    const decoded = await firebaseAdminAuth.verifySessionCookie(sessionCookie, true);
    return {
      id: decoded.uid,
      email: decoded.email ?? '',
      displayName: (decoded.name as string | undefined) ?? null,
    };
  } catch {
    return null;
  }
}
