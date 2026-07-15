import Link from 'next/link';

import { deleteExamAction } from '@/features/admin/actions/exams';
import { DeleteButton } from '@/features/admin/components/delete-button';
import { ExamForm } from '@/features/admin/components/exam-form';
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

export default async function AdminEditionPage({
  params,
  searchParams,
}: {
  params: Promise<{ editionId: string }>;
  searchParams: Promise<{ groupId?: string; categoryId?: string }>;
}) {
  const { editionId } = await params;
  const { groupId, categoryId } = await searchParams;
  const exams = await contentRepository.listExams(editionId);

  return (
    <div className="flex flex-col gap-8">
      <div>
        {groupId && (
          <Link
            href={`/admin/groups/${groupId}`}
            className="text-muted-foreground text-sm hover:underline"
          >
            ← Volver a la convocatoria
          </Link>
        )}
        <h1 className="mt-1 text-xl font-semibold">Exámenes</h1>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Duración</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exams.map((exam) => (
            <TableRow key={exam.id}>
              <TableCell>
                <Link
                  href={`/admin/exams/${exam.id}?editionId=${editionId}&categoryId=${categoryId ?? ''}`}
                  className="hover:underline"
                >
                  {exam.title}
                </Link>
              </TableCell>
              <TableCell>{exam.durationMinutes} min</TableCell>
              <TableCell className="flex justify-end gap-2">
                <DeleteButton
                  action={deleteExamAction.bind(null, editionId, exam.id)}
                  confirmMessage={`¿Eliminar "${exam.title}"? Esto falla si aún tiene preguntas.`}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ExamForm editionId={editionId} />
    </div>
  );
}
