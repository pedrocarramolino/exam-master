'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';

import { registerUser } from '@/application/use-cases/register-user';
import { AuthError } from '@/domain/errors/auth-error';
import { establishSession } from '@/features/auth/establish-session';
import { PasswordInput } from '@/features/auth/components/password-input';
import { registerSchema } from '@/features/auth/schemas';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { FirebaseAuthRepository } from '@/infrastructure/firebase/auth-repository';
import { DataConnectUserRepository } from '@/infrastructure/firebase/user-repository';

const authRepository = new FirebaseAuthRepository();
const userRepository = new DataConnectUserRepository();

export function RegisterForm() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    const parsed = registerSchema.safeParse({
      displayName,
      email,
      password,
      confirmPassword,
      acceptTerms,
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Datos inválidos.');
      return;
    }

    setIsSubmitting(true);
    try {
      await registerUser(authRepository, userRepository, {
        displayName: parsed.data.displayName,
        email: parsed.data.email,
        password: parsed.data.password,
      });
      await establishSession(authRepository);
      router.push('/perfil');
      router.refresh();
    } catch (err) {
      setError(err instanceof AuthError ? err.message : 'No se pudo completar el registro.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="displayName">Nombre</Label>
        <Input
          id="displayName"
          autoComplete="name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
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
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="confirmPassword">Repetir contraseña</Label>
        <PasswordInput
          id="confirmPassword"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          className="mt-0.5"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />
        <span className="text-muted-foreground">
          Acepto los{' '}
          <Link href="/terminos" target="_blank" className="text-foreground underline">
            términos de uso
          </Link>{' '}
          y la{' '}
          <Link href="/privacidad" target="_blank" className="text-foreground underline">
            política de privacidad
          </Link>
          .
        </span>
      </label>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creando cuenta...' : 'Crear cuenta'}
      </Button>
    </form>
  );
}
