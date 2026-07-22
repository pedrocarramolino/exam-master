'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import type { AnswerOptionInput } from '@/domain/entities/content';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import { requireAdmin } from '@/features/admin/require-admin';
import { importQuestionsFromCsv } from '@/application/use-cases/import-questions-from-csv';
import type { ActionState } from '@/features/admin/actions/categories';

const contentRepository = new DataConnectContentRepository();

const questionSchema = z
  .object({
    topicId: z.string().trim().optional(),
    statement: z.string().trim().min(3, 'El enunciado es obligatorio.'),
    explanation: z.string().trim().optional(),
    difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']),
    optionText: z
      .array(z.string().trim().min(1, 'Las respuestas no pueden estar vacías.'))
      .min(2, 'Debe haber al menos 2 respuestas.')
      .max(4, 'Como máximo 4 respuestas.'),
    correctPosition: z.coerce.number().int().min(1).max(4),
  })
  .refine((data) => data.correctPosition <= data.optionText.length, {
    message: 'La respuesta correcta no coincide con ninguna respuesta.',
    path: ['correctPosition'],
  });

function toOptions(data: z.infer<typeof questionSchema>): AnswerOptionInput[] {
  return data.optionText.map((text, i) => ({
    text,
    isCorrect: i === data.correctPosition - 1,
    position: i + 1,
  }));
}

function parseQuestionForm(formData: FormData) {
  const scalars = Object.fromEntries(formData);
  delete scalars.optionText;
  return questionSchema.safeParse({ ...scalars, optionText: formData.getAll('optionText') });
}

export async function createQuestionAction(
  examId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();
  const parsed = parseQuestionForm(formData);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  }

  await contentRepository.createQuestion({
    examId,
    topicId: parsed.data.topicId || null,
    statement: parsed.data.statement,
    explanation: parsed.data.explanation || null,
    difficulty: parsed.data.difficulty,
    options: toOptions(parsed.data),
  });
  revalidatePath(`/admin/exams/${examId}`);
  return {};
}

export async function updateQuestionAction(
  examId: string,
  questionId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();
  const parsed = parseQuestionForm(formData);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  }

  await contentRepository.updateQuestion(questionId, {
    topicId: parsed.data.topicId || null,
    statement: parsed.data.statement,
    explanation: parsed.data.explanation || null,
    difficulty: parsed.data.difficulty,
    options: toOptions(parsed.data),
  });
  revalidatePath(`/admin/exams/${examId}`);
  return {};
}

export async function deleteQuestionAction(examId: string, questionId: string): Promise<void> {
  await requireAdmin();
  await contentRepository.deleteQuestion(questionId);
  revalidatePath(`/admin/exams/${examId}`);
}

export interface ImportActionState {
  error?: string;
  created?: number;
  errors?: { row: number; message: string }[];
}

export async function importQuestionsAction(
  examId: string,
  categoryId: string,
  _prevState: ImportActionState,
  formData: FormData,
): Promise<ImportActionState> {
  await requireAdmin();
  const file = formData.get('file');
  if (!(file instanceof File) || file.size === 0) {
    return { error: 'Selecciona un archivo CSV.' };
  }
  // 2 MB ≈ miles de preguntas; evita agotar memoria del servidor con un archivo enorme.
  if (file.size > 2 * 1024 * 1024) {
    return { error: 'El CSV no puede superar los 2 MB.' };
  }

  const csvText = await file.text();
  const result = await importQuestionsFromCsv(contentRepository, examId, categoryId, csvText);
  revalidatePath(`/admin/exams/${examId}`);
  return { created: result.created, errors: result.errors };
}
