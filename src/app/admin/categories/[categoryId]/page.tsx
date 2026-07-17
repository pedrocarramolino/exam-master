import Link from 'next/link';
import { notFound } from 'next/navigation';

import { deleteGroupAction } from '@/features/admin/actions/groups';
import { CategoryForm } from '@/features/admin/components/category-form';
import { DeleteButton } from '@/features/admin/components/delete-button';
import { GroupForm } from '@/features/admin/components/group-form';
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
      <div className="flex items-start justify-between gap-4">
        <PageHeader title={category.name} backHref="/admin/categories" backLabel="Oposiciones" />
        <Link
          href={`/admin/categories/${categoryId}/topics`}
          className="text-muted-foreground hover:text-foreground text-sm hover:underline"
        >
          Gestionar temas →
        </Link>
      </div>

      <Card>
        <CardContent>
          <details>
            <summary className="cursor-pointer text-sm font-medium">Editar oposición</summary>
            <div className="mt-3">
              <CategoryForm category={category} />
            </div>
          </details>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Comunidades / grupos</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4">Nombre</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead className="pr-4 text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {groups.map((group) => (
                <TableRow key={group.id}>
                  <TableCell className="pl-4">
                    <Link
                      href={`/admin/groups/${group.id}?categoryId=${categoryId}`}
                      className="hover:underline"
                    >
                      {group.name}
                    </Link>
                  </TableCell>
                  <TableCell>{group.slug}</TableCell>
                  <TableCell className="flex justify-end gap-2 pr-4">
                    <DeleteButton
                      action={deleteGroupAction.bind(null, categoryId, group.id)}
                      confirmMessage={`¿Eliminar "${group.name}"? Esto falla si aún tiene convocatorias.`}
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
          <CardTitle>Nueva comunidad / grupo</CardTitle>
        </CardHeader>
        <CardContent>
          <GroupForm categoryId={categoryId} />
        </CardContent>
      </Card>
    </div>
  );
}
