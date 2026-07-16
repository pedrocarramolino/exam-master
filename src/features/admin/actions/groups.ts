'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import { requireAdmin } from '@/features/admin/require-admin';
import type { ActionState } from '@/features/admin/actions/categories';

const contentRepository = new DataConnectContentRepository();

const groupSchema = z.object({
  name: z.string().trim().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  slug: z
    .string()
    .trim()
    .min(2, 'El slug debe tener al menos 2 caracteres.')
    .regex(/^[a-z0-9-]+$/, 'El slug solo puede tener minúsculas, números y guiones.'),
});

export async function createGroupAction(
  categoryId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();
  const parsed = groupSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  }

  await contentRepository.createGroup({ categoryId, ...parsed.data });
  revalidatePath(`/admin/categories/${categoryId}`);
  return {};
}

export async function updateGroupAction(
  categoryId: string,
  groupId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();
  const parsed = groupSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  }

  await contentRepository.updateGroup(groupId, parsed.data);
  revalidatePath(`/admin/categories/${categoryId}`);
  return {};
}

export async function deleteGroupAction(categoryId: string, groupId: string): Promise<void> {
  await requireAdmin();
  await contentRepository.deleteGroup(groupId);
  revalidatePath(`/admin/categories/${categoryId}`);
}
