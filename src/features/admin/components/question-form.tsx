'use client';

import { useActionState } from 'react';

import type { Question, Topic } from '@/domain/entities/content';
import { createQuestionAction, updateQuestionAction } from '@/features/admin/actions/questions';
import type { ActionState } from '@/features/admin/actions/categories';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { Textarea } from '@/shared/components/ui/textarea';

const initialState: ActionState = {};

export function QuestionForm({
  examId,
  topics,
  question,
}: {
  examId: string;
  topics: Topic[];
  question?: Question;
}) {
  const action = question
    ? updateQuestionAction.bind(null, examId, question.id)
    : createQuestionAction.bind(null, examId);
  const [state, formAction, isPending] = useActionState(action, initialState);

  const correctPosition = question?.options.find((o) => o.isCorrect)?.position ?? 1;

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="statement">Enunciado</Label>
        <Textarea id="statement" name="statement" defaultValue={question?.statement} required />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="topicId">Tema</Label>
          <Select
            name="topicId"
            defaultValue={question?.topicId ?? undefined}
            items={topics.map((topic) => ({ value: topic.id, label: topic.name }))}
          >
            <SelectTrigger id="topicId">
              <SelectValue placeholder="Sin tema" />
            </SelectTrigger>
            <SelectContent>
              {topics.map((topic) => (
                <SelectItem key={topic.id} value={topic.id}>
                  {topic.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="difficulty">Dificultad</Label>
          <Select
            name="difficulty"
            defaultValue={question?.difficulty ?? 'MEDIUM'}
            items={[
              { value: 'EASY', label: 'Fácil' },
              { value: 'MEDIUM', label: 'Media' },
              { value: 'HARD', label: 'Difícil' },
            ]}
          >
            <SelectTrigger id="difficulty">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EASY">Fácil</SelectItem>
              <SelectItem value="MEDIUM">Media</SelectItem>
              <SelectItem value="HARD">Difícil</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-1 text-sm font-medium">Respuestas (marca la correcta)</legend>
        {[1, 2, 3, 4].map((position) => (
          <div key={position} className="flex items-center gap-3">
            <input
              type="radio"
              name="correctPosition"
              value={position}
              defaultChecked={correctPosition === position}
              required
              aria-label={`Respuesta ${position} es la correcta`}
              className="accent-primary size-4 shrink-0"
            />
            <Input
              name={`option${position}`}
              defaultValue={question?.options.find((o) => o.position === position)?.text}
              placeholder={`Respuesta ${position}`}
              required
            />
          </div>
        ))}
      </fieldset>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="explanation">Explicación (opcional)</Label>
        <Textarea id="explanation" name="explanation" defaultValue={question?.explanation ?? ''} />
      </div>

      {state.error && <p className="text-destructive text-sm">{state.error}</p>}
      <Button type="submit" disabled={isPending} className="self-start">
        {isPending ? 'Guardando...' : question ? 'Guardar cambios' : 'Crear pregunta'}
      </Button>
    </form>
  );
}
