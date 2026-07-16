'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import { requireAdmin } from '@/features/admin/require-admin';
import type { ActionState } from '@/features/admin/actions/categories';

const contentRepository = new DataConnectContentRepository();

const topicSchema = z.object({
  name: z.string().trim().min(2, 'El nombre debe tener al menos 2 caracteres.'),
});

export async function createTopicAction(
  categoryId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();
  const parsed = topicSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  }

  await contentRepository.createTopic(categoryId, parsed.data.name);
  revalidatePath(`/admin/categories/${categoryId}/topics`);
  return {};
}

export async function deleteTopicAction(categoryId: string, topicId: string): Promise<void> {
  await requireAdmin();
  await contentRepository.deleteTopic(topicId);
  revalidatePath(`/admin/categories/${categoryId}/topics`);
}
