import { CatalogSearchList } from '@/shared/components/catalog-search-list';
import { PageHeader } from '@/shared/components/page-header';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';

const contentRepository = new DataConnectContentRepository();

export default async function SimulatorGroupsPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  const groups = await contentRepository.listGroups(categoryId);

  return (
    <div className="mx-auto max-w-2xl p-4">
      <PageHeader title="Elige tu comunidad" backHref="/simulador" backLabel="Oposiciones" />
      <CatalogSearchList
        items={groups.map((group) => ({
          id: group.id,
          href: `/simulador/grupos/${group.id}`,
          title: group.name,
        }))}
        emptyMessage="Todavía no hay comunidades para esta oposición."
        searchPlaceholder="Buscar comunidad..."
      />
    </div>
  );
}
