import { ChevronRight, CircleDot, FileText } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { LogoutButton } from '@/features/auth/components/logout-button';
import { ExportAttemptsButton } from '@/features/simulator/components/export-attempts-button';
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

export const metadata = { title: 'Mi perfil' };

export default async function ProfilePage() {
  const user = await getCurrentUser();
  // El proxy ya protege esta ruta; este redirect es un cinturón de seguridad adicional.
  if (!user) redirect('/login');

  const attempts = await attemptRepository.getMyAttempts(user.id);
  const initial = (user.displayName ?? user.email ?? '?').charAt(0).toUpperCase();

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 p-4">
      <Card>
        <CardHeader className="flex-row items-center gap-4">
          <span className="bg-primary text-primary-foreground flex size-12 shrink-0 items-center justify-center rounded-full text-lg font-semibold">
            {initial}
          </span>
          <div className="flex flex-col">
            <CardTitle>{user.displayName ?? 'Tu perfil'}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Link href="/simulador" className={buttonVariants({})}>
            Practicar
          </Link>
          <Link href="/estadisticas" className={buttonVariants({ variant: 'outline' })}>
            Estadísticas
          </Link>
          <LogoutButton />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Mis exámenes</CardTitle>
          {attempts.some((a) => a.status === 'FINISHED') && (
            <ExportAttemptsButton attempts={attempts} />
          )}
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {attempts.length === 0 && (
            <p className="text-muted-foreground text-sm">Todavía no has hecho ningún examen.</p>
          )}
          {attempts.map((attempt) => {
            const inProgress = attempt.status === 'IN_PROGRESS';
            return (
              <Link
                key={attempt.id}
                href={
                  inProgress
                    ? `/simulador/intentos/${attempt.id}`
                    : `/simulador/intentos/${attempt.id}/resultado`
                }
                className="group hover:border-primary/40 hover:bg-accent/50 flex items-center gap-3 rounded-xl border p-3 text-sm transition-colors"
              >
                <span className="bg-accent text-accent-foreground flex size-8 shrink-0 items-center justify-center rounded-lg">
                  {inProgress ? <CircleDot className="size-4" /> : <FileText className="size-4" />}
                </span>
                <span className="min-w-0 flex-1 truncate">{attempt.examTitle}</span>
                <span
                  className={
                    inProgress ? 'text-primary font-medium' : 'text-muted-foreground font-medium'
                  }
                >
                  {inProgress ? 'En curso' : `${attempt.score?.toFixed(1)}/10`}
                </span>
                <ChevronRight className="text-muted-foreground group-hover:text-primary size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
