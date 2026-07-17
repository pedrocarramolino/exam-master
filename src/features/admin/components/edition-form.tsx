'use client';

import { useActionState } from 'react';

import type { ExamEdition } from '@/domain/entities/content';
import { createEditionAction, updateEditionAction } from '@/features/admin/actions/editions';
import type { ActionState } from '@/features/admin/actions/categories';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';

const initialState: ActionState = {};

export function EditionForm({ groupId, edition }: { groupId: string; edition?: ExamEdition }) {
  const action = edition
    ? updateEditionAction.bind(null, groupId, edition.id)
    : createEditionAction.bind(null, groupId);
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="year">Año</Label>
        <Input id="year" name="year" type="number" defaultValue={edition?.year} required />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="label">Etiqueta (opcional)</Label>
        <Input
          id="label"
          name="label"
          defaultValue={edition?.label ?? ''}
          placeholder="Convocatoria 2024"
        />
      </div>
      {state.error && <p className="text-destructive text-sm">{state.error}</p>}
      <Button type="submit" disabled={isPending} className="self-start">
        {isPending ? 'Guardando...' : edition ? 'Guardar cambios' : 'Crear convocatoria'}
      </Button>
    </form>
  );
}
