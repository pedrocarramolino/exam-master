'use client';

import { useActionState } from 'react';

import type { ExamCategory } from '@/domain/entities/content';
import {
  createCategoryAction,
  updateCategoryAction,
  type ActionState,
} from '@/features/admin/actions/categories';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';

const initialState: ActionState = {};

export function CategoryForm({ category }: { category?: ExamCategory }) {
  const action = category ? updateCategoryAction.bind(null, category.id) : createCategoryAction;
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" defaultValue={category?.name} required />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          name="slug"
          defaultValue={category?.slug}
          placeholder="maestro-primaria"
          required
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="description">Descripción</Label>
        <Textarea id="description" name="description" defaultValue={category?.description ?? ''} />
      </div>
      {state.error && <p className="text-destructive text-sm">{state.error}</p>}
      <Button type="submit" disabled={isPending} className="self-start">
        {isPending ? 'Guardando...' : category ? 'Guardar cambios' : 'Crear oposición'}
      </Button>
    </form>
  );
}
