'use client';

import { useState, type FormEvent } from 'react';

import { AuthError } from '@/domain/errors/auth-error';
import { forgotPasswordSchema } from '@/features/auth/schemas';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { FirebaseAuthRepository } from '@/infrastructure/firebase/auth-repository';

const authRepository = new FirebaseAuthRepository();

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    const parsed = forgotPasswordSchema.safeParse({ email });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Email inválido.');
      return;
    }

    setIsSubmitting(true);
    try {
      await authRepository.sendPasswordReset(parsed.data.email);
      setSent(true);
    } catch (err) {
      // "user-not-found" se trata como éxito: no revelamos si el email tiene cuenta o no.
      if (err instanceof AuthError && err.code === 'user-not-found') {
        setSent(true);
        return;
      }
      setError(err instanceof AuthError ? err.message : 'No se pudo enviar el email.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (sent) {
    return (
      <p className="text-sm">
        Si existe una cuenta con ese email, te hemos enviado un enlace para restablecer la
        contraseña.
      </p>
    );
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
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar enlace'}
      </Button>
    </form>
  );
}
