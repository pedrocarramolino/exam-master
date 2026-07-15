import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

import { DataConnectAttemptRepository } from '@/infrastructure/firebase/attempt-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';

const attemptRepository = new DataConnectAttemptRepository();

export const metadata = { title: 'Revisión | ExamMaster' };

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
      <div>
        <Link
          href={`/simulador/intentos/${attemptId}/resultado`}
          className="text-muted-foreground text-sm hover:underline"
        >
          ← Volver al resultado
        </Link>
        <h1 className="mt-1 text-xl font-semibold">{review.examTitle}: revisión</h1>
      </div>

      <div className="flex flex-col gap-4">
        {review.questions.map((question, index) => {
          const userAnswer = answerByQuestionId.get(question.id);
          return (
            <div key={question.id} className="rounded-lg border p-4">
              <p className="font-medium">
                {index + 1}. {question.statement}
              </p>
              <div className="mt-3 flex flex-col gap-1.5">
                {question.options.map((option) => {
                  const wasSelected = userAnswer?.selectedOptionId === option.id;
                  return (
                    <div
                      key={option.id}
                      className={`rounded-md border px-3 py-2 text-sm ${
                        option.isCorrect
                          ? 'border-green-600 bg-green-50 dark:bg-green-950'
                          : wasSelected
                            ? 'border-destructive bg-destructive/10'
                            : 'border-border'
                      }`}
                    >
                      {option.text}
                      {option.isCorrect && ' ✓ Correcta'}
                      {wasSelected && !option.isCorrect && ' ✗ Tu respuesta'}
                    </div>
                  );
                })}
              </div>
              {question.explanation && (
                <p className="text-muted-foreground mt-3 text-sm">{question.explanation}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
