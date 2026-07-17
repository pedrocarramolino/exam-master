import { CheckCircle2, XCircle } from 'lucide-react';
import { notFound, redirect } from 'next/navigation';

import { DataConnectAttemptRepository } from '@/infrastructure/firebase/attempt-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';
import { PageHeader } from '@/shared/components/page-header';
import { cn } from '@/shared/lib/utils';

const attemptRepository = new DataConnectAttemptRepository();
const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export const metadata = { title: 'Revisión' };

export default async function AttemptReviewPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  const [attempt, review] = await Promise.all([
    attemptRepository.getAttemptById(user.id, attemptId),
    attemptRepository.getAttemptReview(user.id, attemptId),
  ]);
  if (!attempt) notFound();
  if (attempt.status === 'IN_PROGRESS') redirect(`/simulador/intentos/${attemptId}`);
  if (!review) {
    // Debería existir siempre que el intento esté finalizado; si no, algo va mal.
    notFound();
  }

  const answerByQuestionId = new Map(attempt.answers.map((a) => [a.questionId, a]));

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-4">
      <PageHeader
        title={`${review.examTitle}: revisión`}
        backHref={`/simulador/intentos/${attemptId}/resultado`}
        backLabel="Resultado"
      />

      <div className="flex flex-col gap-4">
        {review.questions.map((question, index) => {
          const userAnswer = answerByQuestionId.get(question.id);
          return (
            <div key={question.id} className="flex flex-col gap-4 rounded-2xl border p-5">
              <p className="font-medium">
                {index + 1}. {question.statement}
              </p>
              <div className="flex flex-col gap-2">
                {question.options.map((option, optionIndex) => {
                  const wasSelected = userAnswer?.selectedOptionId === option.id;
                  return (
                    <div
                      key={option.id}
                      className={cn(
                        'flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm',
                        option.isCorrect
                          ? 'border-green-600 bg-green-50 dark:bg-green-950'
                          : wasSelected
                            ? 'border-destructive bg-destructive/10'
                            : 'border-border',
                      )}
                    >
                      <span
                        className={cn(
                          'flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium',
                          option.isCorrect
                            ? 'border-green-600 bg-green-600 text-white'
                            : wasSelected
                              ? 'border-destructive bg-destructive text-white'
                              : 'border-border text-muted-foreground',
                        )}
                      >
                        {OPTION_LETTERS[optionIndex]}
                      </span>
                      <span className="flex-1">{option.text}</span>
                      {option.isCorrect && (
                        <CheckCircle2 className="size-4 shrink-0 text-green-600 dark:text-green-500" />
                      )}
                      {wasSelected && !option.isCorrect && (
                        <XCircle className="text-destructive size-4 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
              {question.explanation && (
                <p className="text-muted-foreground text-sm">{question.explanation}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
