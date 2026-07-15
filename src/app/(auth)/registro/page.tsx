import Link from 'next/link';

import { RegisterForm } from '@/features/auth/components/register-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

export const metadata = { title: 'Crear cuenta | ExamMaster' };

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crear cuenta</CardTitle>
        <CardDescription>Regístrate para empezar a practicar.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <RegisterForm />
        <p className="text-muted-foreground text-center text-sm">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-foreground font-medium hover:underline">
            Inicia sesión
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
