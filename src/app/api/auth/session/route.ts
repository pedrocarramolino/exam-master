import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { z } from 'zod';

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

// Cierre de sesión: invalida la cookie en el navegador.
export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  return NextResponse.json({ ok: true });
}
