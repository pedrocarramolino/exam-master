import Link from 'next/link';
import { Suspense } from 'react';

import { LoginForm } from '@/features/auth/components/login-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

export const metadata = { title: 'Iniciar sesión' };

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
        <CardDescription>Accede para practicar tus simulacros.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Suspense>
          <LoginForm />
        </Suspense>
        <p className="text-muted-foreground text-center text-sm">
          ¿No tienes cuenta?{' '}
          <Link href="/registro" className="text-foreground font-medium hover:underline">
            Regístrate
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
