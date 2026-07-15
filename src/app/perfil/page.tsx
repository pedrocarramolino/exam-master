import { redirect } from 'next/navigation';

import { LogoutButton } from '@/features/auth/components/logout-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { getCurrentUser } from '@/infrastructure/firebase/session';

export const metadata = { title: 'Mi perfil | ExamMaster' };

export default async function ProfilePage() {
  const user = await getCurrentUser();
  // El proxy ya protege esta ruta; este redirect es un cinturón de seguridad adicional.
  if (!user) redirect('/login');

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 p-4">
      <Card>
        <CardHeader>
          <CardTitle>{user.displayName ?? 'Tu perfil'}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <LogoutButton />
        </CardContent>
      </Card>
    </div>
  );
}
