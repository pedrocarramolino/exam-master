'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, type FocusEvent, type FormEvent } from 'react';

import { registerUser } from '@/application/use-cases/register-user';
import { AuthError } from '@/domain/errors/auth-error';
import { establishSession } from '@/features/auth/establish-session';
import { PasswordInput } from '@/features/auth/components/password-input';
import { getFieldErrors, registerSchema } from '@/features/auth/schemas';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { cn } from '@/shared/lib/utils';
import { FirebaseAuthRepository } from '@/infrastructure/firebase/auth-repository';
import { DataConnectUserRepository } from '@/infrastructure/firebase/user-repository';

const authRepository = new FirebaseAuthRepository();
const userRepository = new DataConnectUserRepository();

type FieldName = 'displayName' | 'email' | 'password' | 'confirmPassword' | 'acceptTerms';

export function RegisterForm() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function currentValues() {
    return { displayName, email, password, confirmPassword, acceptTerms };
  }

  function validateField(name: FieldName) {
    const result = registerSchema.safeParse(currentValues());
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
    validateField(event.target.name as FieldName);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    const parsed = registerSchema.safeParse(currentValues());
    if (!parsed.success) {
      setFieldErrors(getFieldErrors(parsed.error));
      return;
    }
    setFieldErrors({});

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="displayName">Nombre</Label>
        <Input
          id="displayName"
          name="displayName"
          autoComplete="name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          onBlur={handleBlur}
          aria-invalid={!!fieldErrors.displayName}
          aria-describedby={fieldErrors.displayName ? 'displayName-error' : undefined}
          className={cn(fieldErrors.displayName && 'border-destructive')}
        />
        {fieldErrors.displayName && (
          <p id="displayName-error" className="text-destructive text-xs">
            {fieldErrors.displayName}
          </p>
        )}
      </div>
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
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handleBlur}
          aria-invalid={!!fieldErrors.password}
          aria-describedby={fieldErrors.password ? 'password-error' : 'password-hint'}
          className={cn(fieldErrors.password && 'border-destructive')}
        />
        {fieldErrors.password ? (
          <p id="password-error" className="text-destructive text-xs">
            {fieldErrors.password}
          </p>
        ) : (
          <p id="password-hint" className="text-muted-foreground text-xs">
            Mínimo 8 caracteres, con al menos una letra y un número.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="confirmPassword">Repetir contraseña</Label>
        <PasswordInput
          id="confirmPassword"
          name="confirmPassword"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={handleBlur}
          aria-invalid={!!fieldErrors.confirmPassword}
          aria-describedby={fieldErrors.confirmPassword ? 'confirmPassword-error' : undefined}
          className={cn(fieldErrors.confirmPassword && 'border-destructive')}
        />
        {fieldErrors.confirmPassword && (
          <p id="confirmPassword-error" className="text-destructive text-xs">
            {fieldErrors.confirmPassword}
          </p>
        )}
      </div>
      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          className="mt-0.5"
          checked={acceptTerms}
          onChange={(e) => {
            setAcceptTerms(e.target.checked);
            setFieldErrors((prev) => {
              const next = { ...prev };
              delete next.acceptTerms;
              return next;
            });
          }}
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
      {fieldErrors.acceptTerms && (
        <p className="text-destructive -mt-2 text-xs">{fieldErrors.acceptTerms}</p>
      )}
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creando cuenta...' : 'Crear cuenta'}
      </Button>
    </form>
  );
}
