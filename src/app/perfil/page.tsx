import Link from 'next/link';
import { redirect } from 'next/navigation';

import { LogoutButton } from '@/features/auth/components/logout-button';
import { DataConnectAttemptRepository } from '@/infrastructure/firebase/attempt-repository';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { buttonVariants } from '@/shared/components/ui/button';
import { getCurrentUser } from '@/infrastructure/firebase/session';

const attemptRepository = new DataConnectAttemptRepository();

export const metadata = { title: 'Mi perfil | ExamMaster' };

export default async function ProfilePage() {
  const user = await getCurrentUser();
  // El proxy ya protege esta ruta; este redirect es un cinturón de seguridad adicional.
  if (!user) redirect('/login');

  const attempts = await attemptRepository.getMyAttempts(user.id);

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 p-4">
      <Card>
        <CardHeader>
          <CardTitle>{user.displayName ?? 'Tu perfil'}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Link href="/simulador" className={buttonVariants({})}>
            Practicar
          </Link>
          <LogoutButton />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mis exámenes</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {attempts.length === 0 && (
            <p className="text-muted-foreground text-sm">Todavía no has hecho ningún examen.</p>
          )}
          {attempts.map((attempt) => (
            <Link
              key={attempt.id}
              href={
                attempt.status === 'IN_PROGRESS'
                  ? `/simulador/intentos/${attempt.id}`
                  : `/simulador/intentos/${attempt.id}/resultado`
              }
              className="hover:bg-muted flex items-center justify-between rounded-md border px-3 py-2 text-sm"
            >
              <span>{attempt.examTitle}</span>
              <span className="text-muted-foreground">
                {attempt.status === 'IN_PROGRESS' ? 'En curso' : `${attempt.score?.toFixed(1)}/10`}
              </span>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
