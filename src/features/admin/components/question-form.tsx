'use client';

import { Minus, Plus } from 'lucide-react';
import { useActionState, useState } from 'react';

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
const MIN_OPTIONS = 2;
const MAX_OPTIONS = 4;

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

  const [optionTexts, setOptionTexts] = useState<string[]>(
    question
      ? [...question.options].sort((a, b) => a.position - b.position).map((o) => o.text)
      : ['', '', '', ''],
  );
  const [correctPosition, setCorrectPosition] = useState(
    question?.options.find((o) => o.isCorrect)?.position ?? 1,
  );

  function addOption() {
    if (optionTexts.length >= MAX_OPTIONS) return;
    setOptionTexts([...optionTexts, '']);
  }

  function removeOption(index: number) {
    if (optionTexts.length <= MIN_OPTIONS) return;
    setOptionTexts(optionTexts.filter((_, i) => i !== index));
    if (correctPosition === index + 1) {
      setCorrectPosition(1);
    } else if (correctPosition > index + 1) {
      setCorrectPosition(correctPosition - 1);
    }
  }

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
        <input type="hidden" name="correctPosition" value={correctPosition} />
        {optionTexts.map((text, index) => {
          const position = index + 1;
          return (
            <div key={index} className="flex items-center gap-3">
              <input
                type="radio"
                checked={correctPosition === position}
                onChange={() => setCorrectPosition(position)}
                aria-label={`Respuesta ${position} es la correcta`}
                className="accent-primary size-4 shrink-0"
              />
              <Input
                name="optionText"
                value={text}
                onChange={(e) => {
                  const next = [...optionTexts];
                  next[index] = e.target.value;
                  setOptionTexts(next);
                }}
                placeholder={`Respuesta ${position}`}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => removeOption(index)}
                disabled={optionTexts.length <= MIN_OPTIONS}
                aria-label={`Eliminar respuesta ${position}`}
              >
                <Minus className="size-4" />
              </Button>
            </div>
          );
        })}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addOption}
          disabled={optionTexts.length >= MAX_OPTIONS}
          className="self-start"
        >
          <Plus className="size-4" />
          Añadir respuesta
        </Button>
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
