import Link from 'next/link';

import { deleteCategoryAction } from '@/features/admin/actions/categories';
import { CategoryForm } from '@/features/admin/components/category-form';
import { DeleteButton } from '@/features/admin/components/delete-button';
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

export const metadata = { title: 'Oposiciones (admin)' };

export default async function AdminCategoriesPage() {
  const categories = await contentRepository.listCategories();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="mb-4 text-xl font-semibold">Oposiciones</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <Link href={`/admin/categories/${category.id}`} className="hover:underline">
                    {category.name}
                  </Link>
                </TableCell>
                <TableCell>{category.slug}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <DeleteButton
                    action={deleteCategoryAction.bind(null, category.id)}
                    confirmMessage={`¿Eliminar "${category.name}"? Esto falla si aún tiene comunidades.`}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-medium">Nueva oposición</h2>
        <CategoryForm />
      </div>
    </div>
  );
}
