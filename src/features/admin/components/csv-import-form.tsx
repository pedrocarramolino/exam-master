'use client';

import { useActionState } from 'react';

import { importQuestionsAction, type ImportActionState } from '@/features/admin/actions/questions';
import { Button } from '@/shared/components/ui/button';

const initialState: ImportActionState = {};

export function CsvImportForm({ examId, categoryId }: { examId: string; categoryId: string }) {
  const [state, formAction, isPending] = useActionState(
    importQuestionsAction.bind(null, examId, categoryId),
    initialState,
  );

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <p className="text-muted-foreground text-sm">
        CSV con cabecera:{' '}
        <code>
          tema,enunciado,respuesta1,respuesta2,respuesta3,respuesta4,correcta,explicacion,dificultad
        </code>
        .<code>correcta</code> es el número (1-4) de la respuesta correcta; <code>explicacion</code>{' '}
        y <code>dificultad</code> (EASY/MEDIUM/HARD) son opcionales.
      </p>
      <input
        type="file"
        name="file"
        accept=".csv,text/csv"
        required
        className="file:bg-primary file:text-primary-foreground text-muted-foreground text-sm file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:px-3 file:py-1.5 file:text-sm file:font-medium"
      />
      {state.error && <p className="text-destructive text-sm">{state.error}</p>}
      {state.created !== undefined && (
        <p className="text-sm">
          {state.created} pregunta(s) importada(s) correctamente.
          {state.errors && state.errors.length > 0 && (
            <>
              {' '}
              {state.errors.length} fila(s) con error:
              <ul className="list-disc pl-5">
                {state.errors.map((e, i) => (
                  <li key={i}>
                    Fila {e.row}: {e.message}
                  </li>
                ))}
              </ul>
            </>
          )}
        </p>
      )}
      <Button type="submit" disabled={isPending} className="self-start">
        {isPending ? 'Importando...' : 'Importar CSV'}
      </Button>
    </form>
  );
}
