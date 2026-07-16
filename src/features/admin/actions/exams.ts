'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import { requireAdmin } from '@/features/admin/require-admin';
import type { ActionState } from '@/features/admin/actions/categories';

const contentRepository = new DataConnectContentRepository();

const examSchema = z.object({
  title: z.string().trim().min(2, 'El título debe tener al menos 2 caracteres.'),
  description: z.string().trim().optional(),
  durationMinutes: z.coerce.number().int().min(1, 'La duración debe ser mayor que 0.'),
});

export async function createExamAction(
  editionId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();
  const parsed = examSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  }

  await contentRepository.createExam({
    editionId,
    title: parsed.data.title,
    description: parsed.data.description || null,
    durationMinutes: parsed.data.durationMinutes,
  });
  revalidatePath(`/admin/editions/${editionId}`);
  return {};
}

export async function updateExamAction(
  editionId: string,
  examId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();
  const parsed = examSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  }

  await contentRepository.updateExam(examId, {
    title: parsed.data.title,
    description: parsed.data.description || null,
    durationMinutes: parsed.data.durationMinutes,
  });
  revalidatePath(`/admin/editions/${editionId}`);
  return {};
}

export async function deleteExamAction(editionId: string, examId: string): Promise<void> {
  await requireAdmin();
  await contentRepository.deleteExam(examId);
  revalidatePath(`/admin/editions/${editionId}`);
}
