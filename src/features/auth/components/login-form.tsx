'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, type FocusEvent, type FormEvent } from 'react';

import { loginUser } from '@/application/use-cases/login-user';
import { AuthError } from '@/domain/errors/auth-error';
import { establishSession } from '@/features/auth/establish-session';
import { PasswordInput } from '@/features/auth/components/password-input';
import { getFieldErrors, loginSchema } from '@/features/auth/schemas';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { cn } from '@/shared/lib/utils';
import { FirebaseAuthRepository } from '@/infrastructure/firebase/auth-repository';
import { DataConnectUserRepository } from '@/infrastructure/firebase/user-repository';

const authRepository = new FirebaseAuthRepository();
const userRepository = new DataConnectUserRepository();

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateField(name: 'email' | 'password') {
    const result = loginSchema.safeParse({ email, password });
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (result.success) {
        delete next[name];
        return next;
      }
      const issue = result.error.issues.find((i) => i.path[0] === name);
      if (issue) {
        next[name] = issue.message;
      } else {
        delete next[name];
      }
      return next;
    });
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    validateField(event.target.name as 'email' | 'password');
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      setFieldErrors(getFieldErrors(parsed.error));
      return;
    }
    setFieldErrors({});

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          className={cn(fieldErrors.email && 'border-destructive')}
        />
        {fieldErrors.email && (
          <p id="email-error" className="text-destructive text-xs">
            {fieldErrors.email}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password">Contraseña</Label>
        <PasswordInput
          id="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handleBlur}
          aria-invalid={!!fieldErrors.password}
          aria-describedby={fieldErrors.password ? 'password-error' : undefined}
          className={cn(fieldErrors.password && 'border-destructive')}
        />
        {fieldErrors.password && (
          <p id="password-error" className="text-destructive text-xs">
            {fieldErrors.password}
          </p>
        )}
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
