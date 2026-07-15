import Link from 'next/link';
import { notFound } from 'next/navigation';

import { deleteGroupAction } from '@/features/admin/actions/groups';
import { CategoryForm } from '@/features/admin/components/category-form';
import { DeleteButton } from '@/features/admin/components/delete-button';
import { GroupForm } from '@/features/admin/components/group-form';
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

export default async function AdminCategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  const [categories, groups] = await Promise.all([
    contentRepository.listCategories(),
    contentRepository.listGroups(categoryId),
  ]);
  const category = categories.find((c) => c.id === categoryId);
  if (!category) notFound();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link href="/admin/categories" className="text-muted-foreground text-sm hover:underline">
          ← Oposiciones
        </Link>
        <h1 className="mt-1 text-xl font-semibold">{category.name}</h1>
        <Link
          href={`/admin/categories/${categoryId}/topics`}
          className="text-muted-foreground text-sm hover:underline"
        >
          Gestionar temas →
        </Link>
      </div>

      <details>
        <summary className="cursor-pointer text-sm font-medium">Editar oposición</summary>
        <div className="mt-3">
          <CategoryForm category={category} />
        </div>
      </details>

      <div>
        <h2 className="mb-4 text-lg font-medium">Comunidades / grupos</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.map((group) => (
              <TableRow key={group.id}>
                <TableCell>
                  <Link
                    href={`/admin/groups/${group.id}?categoryId=${categoryId}`}
                    className="hover:underline"
                  >
                    {group.name}
                  </Link>
                </TableCell>
                <TableCell>{group.slug}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <DeleteButton
                    action={deleteGroupAction.bind(null, categoryId, group.id)}
                    confirmMessage={`¿Eliminar "${group.name}"? Esto falla si aún tiene convocatorias.`}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-medium">Nueva comunidad / grupo</h2>
        <GroupForm categoryId={categoryId} />
      </div>
    </div>
  );
}
