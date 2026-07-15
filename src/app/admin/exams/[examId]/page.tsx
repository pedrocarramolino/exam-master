import Link from 'next/link';

import { deleteQuestionAction } from '@/features/admin/actions/questions';
import { CsvImportForm } from '@/features/admin/components/csv-import-form';
import { DeleteButton } from '@/features/admin/components/delete-button';
import { QuestionForm } from '@/features/admin/components/question-form';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table';

const contentRepository = new DataConnectContentRepository();

export default async function AdminExamPage({
  params,
  searchParams,
}: {
  params: Promise<{ examId: string }>;
  searchParams: Promise<{ editionId?: string; categoryId?: string }>;
}) {
  const { examId } = await params;
  const { editionId, categoryId } = await searchParams;
  const [questions, topics] = await Promise.all([
    contentRepository.listQuestions(examId),
    categoryId ? contentRepository.listTopics(categoryId) : Promise.resolve([]),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        {editionId && (
          <Link
            href={`/admin/editions/${editionId}`}
            className="text-muted-foreground text-sm hover:underline"
          >
            ← Volver al examen
          </Link>
        )}
        <h1 className="mt-1 text-xl font-semibold">Preguntas</h1>
      </div>

      {!categoryId && (
        <p className="rounded-md bg-yellow-100 p-3 text-sm text-yellow-900">
          Llega a esta página desde el listado de exámenes para poder asignar tema e importar CSV.
        </p>
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Enunciado</TableHead>
            <TableHead>Dificultad</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {questions.map((question) => (
            <TableRow key={question.id}>
              <TableCell className="max-w-md truncate">{question.statement}</TableCell>
              <TableCell>{question.difficulty}</TableCell>
              <TableCell className="flex justify-end gap-2">
                <Link
                  href={`/admin/exams/${examId}/questions/${question.id}?editionId=${editionId ?? ''}&categoryId=${categoryId ?? ''}`}
                  className="text-sm underline"
                >
                  Editar
                </Link>
                <DeleteButton
                  action={deleteQuestionAction.bind(null, examId, question.id)}
                  confirmMessage="¿Eliminar esta pregunta y sus respuestas?"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {categoryId && (
        <>
          <div>
            <h2 className="mb-3 text-lg font-medium">Nueva pregunta</h2>
            <QuestionForm examId={examId} topics={topics} />
          </div>

          <div>
            <h2 className="mb-3 text-lg font-medium">Importar preguntas desde CSV</h2>
            <CsvImportForm examId={examId} categoryId={categoryId} />
          </div>
        </>
      )}
    </div>
  );
}
