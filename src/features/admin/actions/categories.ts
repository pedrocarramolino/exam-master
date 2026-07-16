'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import { requireAdmin } from '@/features/admin/require-admin';

const contentRepository = new DataConnectContentRepository();

const categorySchema = z.object({
  name: z.string().trim().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  slug: z
    .string()
    .trim()
    .min(2, 'El slug debe tener al menos 2 caracteres.')
    .regex(/^[a-z0-9-]+$/, 'El slug solo puede tener minúsculas, números y guiones.'),
  description: z.string().trim().optional(),
});

export interface ActionState {
  error?: string;
}

export async function createCategoryAction(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();
  const parsed = categorySchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  }

  await contentRepository.createCategory({
    name: parsed.data.name,
    slug: parsed.data.slug,
    description: parsed.data.description || null,
  });
  revalidatePath('/admin/categories');
  return {};
}

export async function updateCategoryAction(
  categoryId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();
  const parsed = categorySchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  }

  await contentRepository.updateCategory(categoryId, {
    name: parsed.data.name,
    slug: parsed.data.slug,
    description: parsed.data.description || null,
  });
  revalidatePath('/admin/categories');
  return {};
}

export async function deleteCategoryAction(categoryId: string): Promise<void> {
  await requireAdmin();
  await contentRepository.deleteCategory(categoryId);
  revalidatePath('/admin/categories');
}
