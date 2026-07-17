import Link from 'next/link';

import { deleteCategoryAction } from '@/features/admin/actions/categories';
import { CategoryForm } from '@/features/admin/components/category-form';
import { DeleteButton } from '@/features/admin/components/delete-button';
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

export const metadata = { title: 'Oposiciones (admin)' };

export default async function AdminCategoriesPage() {
  const categories = await contentRepository.listCategories();

  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Oposiciones" />

      <Card>
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
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="pl-4">
                    <Link href={`/admin/categories/${category.id}`} className="hover:underline">
                      {category.name}
                    </Link>
                  </TableCell>
                  <TableCell>{category.slug}</TableCell>
                  <TableCell className="flex justify-end gap-2 pr-4">
                    <DeleteButton
                      action={deleteCategoryAction.bind(null, category.id)}
                      confirmMessage={`¿Eliminar "${category.name}"? Esto falla si aún tiene comunidades.`}
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
          <CardTitle>Nueva oposición</CardTitle>
        </CardHeader>
        <CardContent>
          <CategoryForm />
        </CardContent>
      </Card>
    </div>
  );
}
