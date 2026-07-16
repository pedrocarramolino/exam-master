'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import { requireAdmin } from '@/features/admin/require-admin';
import type { ActionState } from '@/features/admin/actions/categories';

const contentRepository = new DataConnectContentRepository();

const editionSchema = z.object({
  year: z.coerce.number().int().min(2000).max(2100),
  label: z.string().trim().optional(),
});

export async function createEditionAction(
  groupId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();
  const parsed = editionSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  }

  await contentRepository.createEdition({
    groupId,
    year: parsed.data.year,
    label: parsed.data.label || null,
  });
  revalidatePath(`/admin/groups/${groupId}`);
  return {};
}

export async function updateEditionAction(
  groupId: string,
  editionId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();
  const parsed = editionSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  }

  await contentRepository.updateEdition(editionId, {
    year: parsed.data.year,
    label: parsed.data.label || null,
  });
  revalidatePath(`/admin/groups/${groupId}`);
  return {};
}

export async function deleteEditionAction(groupId: string, editionId: string): Promise<void> {
  await requireAdmin();
  await contentRepository.deleteEdition(editionId);
  revalidatePath(`/admin/groups/${groupId}`);
}
