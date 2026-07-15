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
        <CardHeader>
          <CardTitle>{attempt.examTitle}</CardTitle>
          <CardDescription>Resultado del examen</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground text-sm">Nota</p>
              <p className="text-2xl font-semibold">{attempt.score?.toFixed(2) ?? '-'} / 10</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Porcentaje de aciertos</p>
              <p className="text-2xl font-semibold">{percentage}%</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Correctas</p>
              <p className="text-lg font-medium">{correctCount}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Incorrectas</p>
              <p className="text-lg font-medium">{incorrectCount}</p>
            </div>
            <div className="col-span-2">
              <p className="text-muted-foreground text-sm">Tiempo empleado</p>
              <p className="text-lg font-medium">
                {attempt.timeSpentSeconds !== null ? formatDuration(attempt.timeSpentSeconds) : '-'}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Link href={`/simulador/intentos/${attemptId}/revision`} className={buttonVariants({})}>
              Revisar respuestas
            </Link>
            <Link href="/simulador" className={buttonVariants({ variant: 'outline' })}>
              Volver al simulador
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
