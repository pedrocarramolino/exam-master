import { CheckCircle2, Timer, XCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

import { DataConnectAttemptRepository } from '@/infrastructure/firebase/attempt-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';
import { buttonVariants } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

const attemptRepository = new DataConnectAttemptRepository();

export const metadata = { title: 'Resultado' };

function formatDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes} min ${seconds} s`;
}

export default async function AttemptResultPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  const attempt = await attemptRepository.getAttemptById(user.id, attemptId);
  if (!attempt) notFound();
  if (attempt.status === 'IN_PROGRESS') redirect(`/simulador/intentos/${attemptId}`);

  const exam = await attemptRepository.getExamForAttempt(attempt.examId);
  const totalQuestions = exam?.questions.length ?? attempt.answers.length;
  const correctCount = attempt.answers.filter((a) => a.isCorrect).length;
  const incorrectCount = totalQuestions - correctCount;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return (
    <div className="mx-auto max-w-lg p-4">
      <Card>
        <CardHeader className="items-center text-center">
          <CardTitle>{attempt.examTitle}</CardTitle>
          <CardDescription>Resultado del examen</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <div
            className="relative flex size-36 shrink-0 items-center justify-center rounded-full"
            style={{
              background: `conic-gradient(var(--primary) ${percentage}%, var(--muted) 0)`,
            }}
          >
            <div className="bg-background absolute inset-2 flex flex-col items-center justify-center rounded-full">
              <span className="text-3xl font-bold">{attempt.score?.toFixed(1) ?? '-'}</span>
              <span className="text-muted-foreground text-xs">de 10 · {percentage}%</span>
            </div>
          </div>

          <div className="grid w-full grid-cols-3 gap-3 text-center">
            <div className="flex flex-col items-center gap-1 rounded-xl border p-3">
              <CheckCircle2 className="size-5 text-green-600 dark:text-green-500" />
              <span className="font-semibold">{correctCount}</span>
              <span className="text-muted-foreground text-xs">Correctas</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl border p-3">
              <XCircle className="text-destructive size-5" />
              <span className="font-semibold">{incorrectCount}</span>
              <span className="text-muted-foreground text-xs">Incorrectas</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl border p-3">
              <Timer className="text-muted-foreground size-5" />
              <span className="font-semibold">
                {attempt.timeSpentSeconds !== null ? formatDuration(attempt.timeSpentSeconds) : '-'}
              </span>
              <span className="text-muted-foreground text-xs">Tiempo</span>
            </div>
          </div>

          <div className="flex w-full gap-3">
            <Link
              href={`/simulador/intentos/${attemptId}/revision`}
              className={buttonVariants({ className: 'flex-1' })}
            >
              Revisar respuestas
            </Link>
            <Link
              href="/simulador"
              className={buttonVariants({ variant: 'outline', className: 'flex-1' })}
            >
              Volver
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
