import type { AuthRepository } from '@/domain/repositories/auth-repository';

/**
 * Tras login/registro en el cliente, cambia el ID token por la cookie de sesión
 * httpOnly que el servidor (proxy.ts, Server Components) necesita para reconocer al usuario.
 */
export async function establishSession(authRepository: AuthRepository): Promise<void> {
  const idToken = await authRepository.getIdToken();
  if (!idToken) return;

  const response = await fetch('/api/auth/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken }),
  });

  if (!response.ok) {
    throw new Error('No se pudo iniciar la sesión en el servidor.');
  }
}
