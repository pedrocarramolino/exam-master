import { CatalogSearchList } from '@/shared/components/catalog-search-list';
import { PageHeader } from '@/shared/components/page-header';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';

const contentRepository = new DataConnectContentRepository();

export const metadata = { title: 'Simulador' };

export default async function SimulatorCategoriesPage() {
  const categories = await contentRepository.listCategories();

  return (
    <div className="mx-auto max-w-2xl p-4">
      <PageHeader title="Elige tu oposición" />
      <CatalogSearchList
        items={categories.map((category) => ({
          id: category.id,
          href: `/simulador/categorias/${category.id}`,
          title: category.name,
          subtitle: category.description,
        }))}
        emptyMessage="Todavía no hay oposiciones publicadas."
        searchPlaceholder="Buscar oposición..."
      />
    </div>
  );
}
