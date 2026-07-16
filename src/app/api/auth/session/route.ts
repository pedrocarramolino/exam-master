import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { firebaseAdminAuth } from '@/infrastructure/firebase/admin';
import {
  createSessionCookie,
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE_SECONDS,
} from '@/infrastructure/firebase/session';

const bodySchema = z.object({ idToken: z.string().min(1) });

// El cliente llama aquí justo después de login/registro para cambiar su ID token
// por una cookie de sesión httpOnly que el servidor pueda verificar.
export async function POST(request: Request) {
  const body = bodySchema.safeParse(await request.json());
  if (!body.success) {
    return NextResponse.json({ error: 'idToken inválido' }, { status: 400 });
  }

  try {
    const sessionCookie = await createSessionCookie(body.data.idToken);
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_MAX_AGE_SECONDS,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'No se pudo crear la sesión' }, { status: 401 });
  }
}

// Cierre de sesión: borra la cookie Y revoca los tokens en el servidor.
// Sin la revocación, una cookie robada seguiría siendo válida hasta caducar (14 días);
// con ella, getCurrentUser (verifySessionCookie con checkRevoked) la rechaza al instante.
// Efecto colateral asumido: cierra la sesión en todos los dispositivos del usuario.
export async function DELETE() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (sessionCookie) {
    try {
      const decoded = await firebaseAdminAuth.verifySessionCookie(sessionCookie);
      await firebaseAdminAuth.revokeRefreshTokens(decoded.uid);
    } catch {
      // Cookie ya inválida: borrarla del navegador es suficiente.
    }
  }

  cookieStore.delete(SESSION_COOKIE_NAME);
  return NextResponse.json({ ok: true });
}
