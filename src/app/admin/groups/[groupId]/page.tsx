import Link from 'next/link';

import { deleteEditionAction } from '@/features/admin/actions/editions';
import { DeleteButton } from '@/features/admin/components/delete-button';
import { EditionForm } from '@/features/admin/components/edition-form';
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
      <div>
        {categoryId && (
          <Link
            href={`/admin/categories/${categoryId}`}
            className="text-muted-foreground text-sm hover:underline"
          >
            ← Volver a la oposición
          </Link>
        )}
        <h1 className="mt-1 text-xl font-semibold">Convocatorias</h1>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Año</TableHead>
            <TableHead>Etiqueta</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {editions.map((edition) => (
            <TableRow key={edition.id}>
              <TableCell>
                <Link
                  href={`/admin/editions/${edition.id}?groupId=${groupId}&categoryId=${categoryId ?? ''}`}
                  className="hover:underline"
                >
                  {edition.year}
                </Link>
              </TableCell>
              <TableCell>{edition.label}</TableCell>
              <TableCell className="flex justify-end gap-2">
                <DeleteButton
                  action={deleteEditionAction.bind(null, groupId, edition.id)}
                  confirmMessage={`¿Eliminar la convocatoria de ${edition.year}? Esto falla si aún tiene exámenes.`}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditionForm groupId={groupId} />
    </div>
  );
}
