'use client';

import { useActionState } from 'react';

import type { ExamGroup } from '@/domain/entities/content';
import { createGroupAction, updateGroupAction } from '@/features/admin/actions/groups';
import type { ActionState } from '@/features/admin/actions/categories';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';

const initialState: ActionState = {};

export function GroupForm({ categoryId, group }: { categoryId: string; group?: ExamGroup }) {
  const action = group
    ? updateGroupAction.bind(null, categoryId, group.id)
    : createGroupAction.bind(null, categoryId);
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" defaultValue={group?.name} required />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" name="slug" defaultValue={group?.slug} placeholder="andalucia" required />
      </div>
      {state.error && <p className="text-destructive text-sm">{state.error}</p>}
      <Button type="submit" disabled={isPending} className="self-start">
        {isPending ? 'Guardando...' : group ? 'Guardar cambios' : 'Crear comunidad'}
      </Button>
    </form>
  );
}
