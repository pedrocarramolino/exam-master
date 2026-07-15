'use server';

import { redirect } from 'next/navigation';

import { DataConnectAttemptRepository } from '@/infrastructure/firebase/attempt-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';

const attemptRepository = new DataConnectAttemptRepository();

/**
 * Empieza un examen, o retoma el intento en curso si ya existía uno
 * ("guardar progreso automáticamente" implica poder volver a él).
 */
export async function startAttemptAction(examId: string): Promise<void> {
  const user = await getCurrentUser();
  if (!user) redirect(`/login?redirect=/simulador/examenes/${examId}`);

  const existingId = await attemptRepository.getInProgressAttemptId(user.id, examId);
  const attemptId = existingId ?? (await attemptRepository.startAttempt(user.id, examId));
  redirect(`/simulador/intentos/${attemptId}`);
}

export interface SaveAnswerResult {
  ok: boolean;
  error?: string;
}

export async function saveAnswerAction(
  attemptId: string,
  questionId: string,
  selectedOptionId: string | null,
): Promise<SaveAnswerResult> {
  const user = await getCurrentUser();
  if (!user) return { ok: false, error: 'No has iniciado sesión.' };

  try {
    await attemptRepository.saveAnswer(user.id, attemptId, questionId, selectedOptionId);
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : 'No se pudo guardar.' };
  }
}

export async function finishAttemptAction(attemptId: string): Promise<void> {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  await attemptRepository.finishAttempt(user.id, attemptId);
  redirect(`/simulador/intentos/${attemptId}/resultado`);
}
