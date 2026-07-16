'use client';

import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from 'react';

import type { ExamForAttempt } from '@/domain/entities/attempt';
import { finishAttemptAction, saveAnswerAction } from '@/features/simulator/actions';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
}

export function ExamRunner({
  attemptId,
  exam,
  startedAt,
  initialAnswers,
}: {
  attemptId: string;
  exam: ExamForAttempt;
  startedAt: string;
  initialAnswers: Record<string, string | null>;
}) {
  const [answers, setAnswers] = useState<Record<string, string | null>>(initialAnswers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savingQuestionId, setSavingQuestionId] = useState<string | null>(null);
  const [isFinishing, startFinishing] = useTransition();
  const finishedRef = useRef(false);

  const deadline = useMemo(
    () => new Date(startedAt).getTime() + exam.durationMinutes * 60 * 1000,
    [startedAt, exam.durationMinutes],
  );
  const [secondsLeft, setSecondsLeft] = useState(() => Math.max(0, (deadline - Date.now()) / 1000));

  const handleFinish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    startFinishing(async () => {
      await finishAttemptAction(attemptId);
    });
  }, [attemptId]);

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = Math.max(0, (deadline - Date.now()) / 1000);
      setSecondsLeft(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        handleFinish();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline, handleFinish]);

  const question = exam.questions[currentIndex];
  const answeredCount = Object.values(answers).filter((v) => v !== null && v !== undefined).length;
  const progressPercent = Math.round((answeredCount / exam.questions.length) * 100);
  const isLowTime = secondsLeft <= 60;

  async function selectOption(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setSavingQuestionId(questionId);
    await saveAnswerAction(attemptId, questionId, optionId);
    setSavingQuestionId((current) => (current === questionId ? null : current));
  }

  if (!question) return null;

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-5 p-4">
      <div className="flex items-center justify-between gap-4">
        <h1 className="truncate text-lg font-semibold">{exam.title}</h1>
        <span
          className={cn(
            'shrink-0 rounded-md px-2.5 py-1 text-sm font-medium tabular-nums',
            isLowTime ? 'bg-destructive/10 text-destructive' : 'bg-muted',
          )}
        >
          {formatTime(secondsLeft)}
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="bg-muted h-1.5 overflow-hidden rounded-full">
          <div
            className="bg-primary h-full rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-muted-foreground text-sm">
          Pregunta {currentIndex + 1} de {exam.questions.length} · {answeredCount} respondidas
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border p-5">
        <p className="font-medium">{question.statement}</p>
        <div className="flex flex-col gap-2">
          {question.options.map((option, index) => {
            const isSelected = answers[question.id] === option.id;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => selectOption(question.id, option.id)}
                className={cn(
                  'flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors',
                  isSelected ? 'border-primary bg-primary/10' : 'border-border hover:bg-muted',
                )}
              >
                <span
                  className={cn(
                    'flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium',
                    isSelected
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-muted-foreground',
                  )}
                >
                  {OPTION_LETTERS[index]}
                </span>
                {option.text}
              </button>
            );
          })}
        </div>
        {savingQuestionId === question.id && (
          <p className="text-muted-foreground text-xs">Guardando...</p>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5" role="navigation" aria-label="Ir a pregunta">
        {exam.questions.map((q, index) => (
          <button
            key={q.id}
            type="button"
            aria-label={`Pregunta ${index + 1}${answers[q.id] ? ' (respondida)' : ''}`}
            aria-current={index === currentIndex ? 'true' : undefined}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'size-8 rounded-md border text-xs font-medium',
              index === currentIndex
                ? 'border-primary bg-primary text-primary-foreground'
                : answers[q.id]
                  ? 'border-border bg-muted'
                  : 'border-border',
            )}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
        >
          Anterior
        </Button>
        {currentIndex < exam.questions.length - 1 ? (
          <Button
            type="button"
            onClick={() => setCurrentIndex((i) => Math.min(exam.questions.length - 1, i + 1))}
          >
            Siguiente
          </Button>
        ) : (
          <Button type="button" onClick={handleFinish} disabled={isFinishing}>
            {isFinishing ? 'Finalizando...' : 'Finalizar examen'}
          </Button>
        )}
      </div>
    </div>
  );
}
