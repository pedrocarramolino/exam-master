import Link from 'next/link';

import { deleteQuestionAction } from '@/features/admin/actions/questions';
import { CsvImportForm } from '@/features/admin/components/csv-import-form';
import { DeleteButton } from '@/features/admin/components/delete-button';
import { QuestionForm } from '@/features/admin/components/question-form';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import { PageHeader } from '@/shared/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
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
      <PageHeader
        title="Preguntas"
        backHref={editionId ? `/admin/editions/${editionId}` : undefined}
        backLabel="Exámenes"
      />

      {!categoryId && (
        <p className="rounded-lg bg-yellow-100 p-3 text-sm text-yellow-900 dark:bg-yellow-950 dark:text-yellow-100">
          Llega a esta página desde el listado de exámenes para poder asignar tema e importar CSV.
        </p>
      )}

      <Card>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4">Enunciado</TableHead>
                <TableHead>Dificultad</TableHead>
                <TableHead className="pr-4 text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.map((question) => (
                <TableRow key={question.id}>
                  <TableCell className="max-w-md truncate pl-4">{question.statement}</TableCell>
                  <TableCell>{question.difficulty}</TableCell>
                  <TableCell className="flex justify-end gap-2 pr-4">
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
        </CardContent>
      </Card>

      {categoryId && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Nueva pregunta</CardTitle>
            </CardHeader>
            <CardContent>
              <QuestionForm examId={examId} topics={topics} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Importar preguntas desde CSV</CardTitle>
            </CardHeader>
            <CardContent>
              <CsvImportForm examId={examId} categoryId={categoryId} />
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
