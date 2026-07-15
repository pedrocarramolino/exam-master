'use client';

import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from 'react';

import type { ExamForAttempt } from '@/domain/entities/attempt';
import { finishAttemptAction, saveAnswerAction } from '@/features/simulator/actions';
import { Button } from '@/shared/components/ui/button';

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

  async function selectOption(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setSavingQuestionId(questionId);
    await saveAnswerAction(attemptId, questionId, optionId);
    setSavingQuestionId((current) => (current === questionId ? null : current));
  }

  if (!question) return null;

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">{exam.title}</h1>
        <span className="bg-muted rounded-md px-2.5 py-1 text-sm font-medium tabular-nums">
          {formatTime(secondsLeft)}
        </span>
      </div>

      <p className="text-muted-foreground text-sm">
        Pregunta {currentIndex + 1} de {exam.questions.length} · {answeredCount} respondidas
      </p>

      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <p className="font-medium">{question.statement}</p>
        <div className="flex flex-col gap-2">
          {question.options.map((option) => {
            const isSelected = answers[question.id] === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => selectOption(question.id, option.id)}
                className={`rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                  isSelected ? 'border-primary bg-primary/10' : 'border-border hover:bg-muted'
                }`}
              >
                {option.text}
              </button>
            );
          })}
        </div>
        {savingQuestionId === question.id && (
          <p className="text-muted-foreground text-xs">Guardando...</p>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {exam.questions.map((q, index) => (
          <button
            key={q.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`size-8 rounded-md border text-xs font-medium ${
              index === currentIndex
                ? 'border-primary bg-primary text-primary-foreground'
                : answers[q.id]
                  ? 'border-border bg-muted'
                  : 'border-border'
            }`}
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
