import { ChevronRight, CircleDot, FileText } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { LogoutButton } from '@/features/auth/components/logout-button';
import { ExportAttemptsButton } from '@/features/simulator/components/export-attempts-button';
import { DataConnectAttemptRepository } from '@/infrastructure/firebase/attempt-repository';
import { EmptyState } from '@/shared/components/empty-state';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { buttonVariants } from '@/shared/components/ui/button';
import { getCurrentUser } from '@/infrastructure/firebase/session';
import { SCORE_TIER_TEXT_CLASS, scoreTier } from '@/shared/lib/score-tier';
import { cn } from '@/shared/lib/utils';

const attemptRepository = new DataConnectAttemptRepository();

export const metadata = { title: 'Mi perfil' };

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
}

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
            <EmptyState
              icon={FileText}
              message="Todavía no has hecho ningún examen. Elige una oposición para empezar tu primer simulacro."
            />
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
                <div className="min-w-0 flex-1">
                  <p className="truncate">{attempt.examTitle}</p>
                  {attempt.finishedAt && (
                    <p className="text-muted-foreground text-xs">
                      {formatDate(attempt.finishedAt)}
                    </p>
                  )}
                </div>
                <span
                  className={cn(
                    'font-medium',
                    inProgress
                      ? 'text-primary'
                      : attempt.score !== null
                        ? SCORE_TIER_TEXT_CLASS[scoreTier(attempt.score)]
                        : 'text-muted-foreground',
                  )}
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
