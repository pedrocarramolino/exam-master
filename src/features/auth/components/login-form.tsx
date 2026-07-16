'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, type FormEvent } from 'react';

import { loginUser } from '@/application/use-cases/login-user';
import { AuthError } from '@/domain/errors/auth-error';
import { establishSession } from '@/features/auth/establish-session';
import { PasswordInput } from '@/features/auth/components/password-input';
import { loginSchema } from '@/features/auth/schemas';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { FirebaseAuthRepository } from '@/infrastructure/firebase/auth-repository';
import { DataConnectUserRepository } from '@/infrastructure/firebase/user-repository';

const authRepository = new FirebaseAuthRepository();
const userRepository = new DataConnectUserRepository();

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Datos inválidos.');
      return;
    }

    setIsSubmitting(true);
    try {
      await loginUser(authRepository, userRepository, parsed.data.email, parsed.data.password);
      await establishSession(authRepository);
      router.push(searchParams.get('redirect') ?? '/perfil');
      router.refresh();
    } catch (err) {
      setError(err instanceof AuthError ? err.message : 'No se pudo iniciar sesión.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password">Contraseña</Label>
        <PasswordInput
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Entrando...' : 'Entrar'}
      </Button>
      <Link href="/recuperar-password" className="text-muted-foreground text-sm hover:underline">
        ¿Has olvidado tu contraseña?
      </Link>
    </form>
  );
}
