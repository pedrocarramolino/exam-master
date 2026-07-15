'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';

import { registerUser } from '@/application/use-cases/register-user';
import { AuthError } from '@/domain/errors/auth-error';
import { establishSession } from '@/features/auth/establish-session';
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
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    const parsed = registerSchema.safeParse({ displayName, email, password });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Datos inválidos.');
      return;
    }

    setIsSubmitting(true);
    try {
      await registerUser(authRepository, userRepository, parsed.data);
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
        <Input
          id="password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creando cuenta...' : 'Crear cuenta'}
      </Button>
    </form>
  );
}
