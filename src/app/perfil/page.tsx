import { Award, ChevronRight, CircleDot, FileText, ListChecks } from 'lucide-react';
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

  const finishedScores = attempts
    .filter((a) => a.status === 'FINISHED' && a.score !== null)
    .map((a) => a.score as number);
  const averageScore =
    finishedScores.length > 0
      ? finishedScores.reduce((sum, s) => sum + s, 0) / finishedScores.length
      : null;

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 p-4">
      <Card>
        <CardHeader className="flex-row items-center gap-4">
          <span className="from-primary to-primary/70 text-primary-foreground ring-background flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xl font-semibold ring-4">
            {initial}
          </span>
          <div className="flex min-w-0 flex-col">
            <CardTitle className="truncate text-lg">{user.displayName ?? 'Tu perfil'}</CardTitle>
            <CardDescription className="truncate">{user.email}</CardDescription>
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
        {finishedScores.length > 0 && (
          <div className="mt-1 grid grid-cols-2 divide-x border-t">
            <div className="flex items-center gap-2.5 px-4 py-3">
              <span className="bg-accent text-accent-foreground flex size-8 shrink-0 items-center justify-center rounded-lg">
                <ListChecks className="size-4" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-semibold">{finishedScores.length}</span>
                <span className="text-muted-foreground text-xs">Exámenes</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-3">
              <span
                className={cn(
                  'flex size-8 shrink-0 items-center justify-center rounded-lg',
                  averageScore !== null
                    ? cn(SCORE_TIER_TEXT_CLASS[scoreTier(averageScore)], 'bg-current/10')
                    : 'bg-accent text-accent-foreground',
                )}
              >
                <Award
                  className={cn(
                    'size-4',
                    averageScore !== null && SCORE_TIER_TEXT_CLASS[scoreTier(averageScore)],
                  )}
                />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-semibold">
                  {averageScore !== null ? averageScore.toFixed(1) : '-'}
                </span>
                <span className="text-muted-foreground text-xs">Nota media</span>
              </div>
            </div>
          </div>
        )}
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
                <span
                  className={cn(
                    'flex size-9 shrink-0 items-center justify-center rounded-lg',
                    inProgress
                      ? 'bg-primary/10 text-primary'
                      : 'bg-accent text-accent-foreground',
                  )}
                >
                  {inProgress ? <CircleDot className="size-4" /> : <FileText className="size-4" />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{attempt.examTitle}</p>
                  {attempt.finishedAt && (
                    <p className="text-muted-foreground text-xs">
                      {formatDate(attempt.finishedAt)}
                    </p>
                  )}
                </div>
                <span
                  className={cn(
                    'shrink-0 rounded-full px-2.5 py-1 text-xs font-medium',
                    inProgress
                      ? 'bg-primary/10 text-primary'
                      : attempt.score !== null
                        ? cn(
                            SCORE_TIER_TEXT_CLASS[scoreTier(attempt.score)],
                            'bg-current/10',
                          )
                        : 'bg-muted text-muted-foreground',
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
