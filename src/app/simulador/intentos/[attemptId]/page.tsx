import { notFound, redirect } from 'next/navigation';

import { ExamRunner } from '@/features/simulator/components/exam-runner';
import { DataConnectAttemptRepository } from '@/infrastructure/firebase/attempt-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';

const attemptRepository = new DataConnectAttemptRepository();

export const metadata = { title: 'Examen en curso' };

export default async function AttemptPage({ params }: { params: Promise<{ attemptId: string }> }) {
  const { attemptId } = await params;
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  const attempt = await attemptRepository.getAttemptById(user.id, attemptId);
  if (!attempt) notFound();
  if (attempt.status !== 'IN_PROGRESS') {
    redirect(`/simulador/intentos/${attemptId}/resultado`);
  }

  const exam = await attemptRepository.getExamForAttempt(attempt.examId);
  if (!exam) notFound();

  const initialAnswers: Record<string, string | null> = {};
  for (const answer of attempt.answers) {
    initialAnswers[answer.questionId] = answer.selectedOptionId;
  }

  return (
    <ExamRunner
      attemptId={attemptId}
      exam={exam}
      startedAt={attempt.startedAt}
      initialAnswers={initialAnswers}
    />
  );
}
