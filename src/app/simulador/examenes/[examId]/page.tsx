import { notFound } from 'next/navigation';

import { startAttemptAction } from '@/features/simulator/actions';
import { DataConnectAttemptRepository } from '@/infrastructure/firebase/attempt-repository';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

const attemptRepository = new DataConnectAttemptRepository();

export default async function SimulatorExamDetailPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  const exam = await attemptRepository.getExamForAttempt(examId);
  if (!exam) notFound();

  return (
    <div className="mx-auto max-w-lg p-4">
      <Card>
        <CardHeader>
          <CardTitle>{exam.title}</CardTitle>
          <CardDescription>
            {exam.durationMinutes} minutos · {exam.questions.length} preguntas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={startAttemptAction.bind(null, examId)}>
            <Button type="submit">Empezar examen</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
