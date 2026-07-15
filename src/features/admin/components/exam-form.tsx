'use client';

import { useActionState } from 'react';

import type { Exam } from '@/domain/entities/content';
import { createExamAction, updateExamAction } from '@/features/admin/actions/exams';
import type { ActionState } from '@/features/admin/actions/categories';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';

const initialState: ActionState = {};

export function ExamForm({ editionId, exam }: { editionId: string; exam?: Exam }) {
  const action = exam
    ? updateExamAction.bind(null, editionId, exam.id)
    : createExamAction.bind(null, editionId);
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-3 rounded-lg border p-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="title">Título</Label>
        <Input id="title" name="title" defaultValue={exam?.title} required />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="description">Descripción</Label>
        <Textarea id="description" name="description" defaultValue={exam?.description ?? ''} />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="durationMinutes">Duración (minutos)</Label>
        <Input
          id="durationMinutes"
          name="durationMinutes"
          type="number"
          defaultValue={exam?.durationMinutes}
          required
        />
      </div>
      {state.error && <p className="text-destructive text-sm">{state.error}</p>}
      <Button type="submit" disabled={isPending} className="self-start">
        {isPending ? 'Guardando...' : exam ? 'Guardar cambios' : 'Crear examen'}
      </Button>
    </form>
  );
}
