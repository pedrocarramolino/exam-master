import { Clock, ListChecks } from 'lucide-react';
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
          <CardTitle className="text-xl">{exam.title}</CardTitle>
          <CardDescription>Simulacro cronometrado con corrección al finalizar</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Clock className="text-muted-foreground size-4" />
              <span className="text-sm">{exam.durationMinutes} minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <ListChecks className="text-muted-foreground size-4" />
              <span className="text-sm">{exam.questions.length} preguntas</span>
            </div>
          </div>
          <form action={startAttemptAction.bind(null, examId)}>
            <Button type="submit" size="lg" className="w-full">
              Empezar examen
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
