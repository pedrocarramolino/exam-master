import Link from 'next/link';

import { deleteEditionAction } from '@/features/admin/actions/editions';
import { DeleteButton } from '@/features/admin/components/delete-button';
import { EditionForm } from '@/features/admin/components/edition-form';
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

export default async function AdminGroupPage({
  params,
  searchParams,
}: {
  params: Promise<{ groupId: string }>;
  searchParams: Promise<{ categoryId?: string }>;
}) {
  const { groupId } = await params;
  const { categoryId } = await searchParams;
  const editions = await contentRepository.listEditions(groupId);

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Convocatorias"
        backHref={categoryId ? `/admin/categories/${categoryId}` : undefined}
        backLabel="Oposición"
      />

      <Card>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4">Año</TableHead>
                <TableHead>Etiqueta</TableHead>
                <TableHead className="pr-4 text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {editions.map((edition) => (
                <TableRow key={edition.id}>
                  <TableCell className="pl-4">
                    <Link
                      href={`/admin/editions/${edition.id}?groupId=${groupId}&categoryId=${categoryId ?? ''}`}
                      className="hover:underline"
                    >
                      {edition.year}
                    </Link>
                  </TableCell>
                  <TableCell>{edition.label}</TableCell>
                  <TableCell className="flex justify-end gap-2 pr-4">
                    <DeleteButton
                      action={deleteEditionAction.bind(null, groupId, edition.id)}
                      confirmMessage={`¿Eliminar la convocatoria de ${edition.year}? Esto falla si aún tiene exámenes.`}
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
          <CardTitle>Nueva convocatoria</CardTitle>
        </CardHeader>
        <CardContent>
          <EditionForm groupId={groupId} />
        </CardContent>
      </Card>
    </div>
  );
}
