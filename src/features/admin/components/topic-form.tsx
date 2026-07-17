'use client';

import { useActionState } from 'react';

import { createTopicAction } from '@/features/admin/actions/topics';
import type { ActionState } from '@/features/admin/actions/categories';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';

const initialState: ActionState = {};

export function TopicForm({ categoryId }: { categoryId: string }) {
  const [state, formAction, isPending] = useActionState(
    createTopicAction.bind(null, categoryId),
    initialState,
  );

  return (
    <form action={formAction} className="flex items-end gap-3">
      <div className="flex flex-1 flex-col gap-1.5">
        <Label htmlFor="name">Nuevo tema</Label>
        <Input id="name" name="name" required />
      </div>
      {state.error && <p className="text-destructive text-sm">{state.error}</p>}
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Creando...' : 'Añadir tema'}
      </Button>
    </form>
  );
}
