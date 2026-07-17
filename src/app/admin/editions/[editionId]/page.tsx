import Link from 'next/link';

import { deleteExamAction } from '@/features/admin/actions/exams';
import { DeleteButton } from '@/features/admin/components/delete-button';
import { ExamForm } from '@/features/admin/components/exam-form';
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
      <PageHeader
        title="Exámenes"
        backHref={groupId ? `/admin/groups/${groupId}` : undefined}
        backLabel="Convocatoria"
      />

      <Card>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4">Título</TableHead>
                <TableHead>Duración</TableHead>
                <TableHead className="pr-4 text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exams.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell className="pl-4">
                    <Link
                      href={`/admin/exams/${exam.id}?editionId=${editionId}&categoryId=${categoryId ?? ''}`}
                      className="hover:underline"
                    >
                      {exam.title}
                    </Link>
                  </TableCell>
                  <TableCell>{exam.durationMinutes} min</TableCell>
                  <TableCell className="flex justify-end gap-2 pr-4">
                    <DeleteButton
                      action={deleteExamAction.bind(null, editionId, exam.id)}
                      confirmMessage={`¿Eliminar "${exam.title}"? Esto falla si aún tiene preguntas.`}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nuevo examen</CardTitle>
        </CardHeader>
        <CardContent>
          <ExamForm editionId={editionId} />
        </CardContent>
      </Card>
    </div>
  );
}
