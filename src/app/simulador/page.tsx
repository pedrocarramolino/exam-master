import Link from 'next/link';

import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';

const contentRepository = new DataConnectContentRepository();

export const metadata = { title: 'Simulador' };

export default async function SimulatorCategoriesPage() {
  const categories = await contentRepository.listCategories();

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="mb-6 text-xl font-semibold">Elige tu oposición</h1>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/simulador/categorias/${category.id}`}
            className="hover:bg-muted rounded-lg border p-4"
          >
            <p className="font-medium">{category.name}</p>
            {category.description && (
              <p className="text-muted-foreground text-sm">{category.description}</p>
            )}
          </Link>
        ))}
        {categories.length === 0 && (
          <p className="text-muted-foreground text-sm">Todavía no hay oposiciones publicadas.</p>
        )}
      </div>
    </div>
  );
}
