import { CatalogLinkCard } from '@/shared/components/catalog-link-card';
import { PageHeader } from '@/shared/components/page-header';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';

const contentRepository = new DataConnectContentRepository();

export const metadata = { title: 'Simulador' };

export default async function SimulatorCategoriesPage() {
  const categories = await contentRepository.listCategories();

  return (
    <div className="mx-auto max-w-2xl p-4">
      <PageHeader title="Elige tu oposición" />
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <CatalogLinkCard
            key={category.id}
            href={`/simulador/categorias/${category.id}`}
            title={category.name}
            subtitle={category.description}
          />
        ))}
        {categories.length === 0 && (
          <p className="text-muted-foreground text-sm">Todavía no hay oposiciones publicadas.</p>
        )}
      </div>
    </div>
  );
}
