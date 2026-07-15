'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import type { AnswerOptionInput } from '@/domain/entities/content';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import { importQuestionsFromCsv } from '@/application/use-cases/import-questions-from-csv';
import type { ActionState } from '@/features/admin/actions/categories';

const contentRepository = new DataConnectContentRepository();

const questionSchema = z.object({
  topicId: z.string().trim().optional(),
  statement: z.string().trim().min(3, 'El enunciado es obligatorio.'),
  explanation: z.string().trim().optional(),
  difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']),
  option1: z.string().trim().min(1, 'Falta la respuesta 1.'),
  option2: z.string().trim().min(1, 'Falta la respuesta 2.'),
  option3: z.string().trim().min(1, 'Falta la respuesta 3.'),
  option4: z.string().trim().min(1, 'Falta la respuesta 4.'),
  correctPosition: z.coerce.number().int().min(1).max(4),
});

function toOptions(data: z.infer<typeof questionSchema>): AnswerOptionInput[] {
  const texts = [data.option1, data.option2, data.option3, data.option4];
  return texts.map((text, i) => ({
    text,
    isCorrect: i === data.correctPosition - 1,
    position: i + 1,
  }));
}

export async function createQuestionAction(
  examId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = questionSchema.safeParse(Object.fromEntries(formData));
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
  const parsed = questionSchema.safeParse(Object.fromEntries(formData));
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
  const file = formData.get('file');
  if (!(file instanceof File) || file.size === 0) {
    return { error: 'Selecciona un archivo CSV.' };
  }

  const csvText = await file.text();
  const result = await importQuestionsFromCsv(contentRepository, examId, categoryId, csvText);
  revalidatePath(`/admin/exams/${examId}`);
  return { created: result.created, errors: result.errors };
}
