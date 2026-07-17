import { CatalogSearchList } from '@/shared/components/catalog-search-list';
import { PageHeader } from '@/shared/components/page-header';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';

const contentRepository = new DataConnectContentRepository();

export default async function SimulatorEditionsPage({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const { groupId } = await params;
  const editions = await contentRepository.listEditions(groupId);

  return (
    <div className="mx-auto max-w-2xl p-4">
      <PageHeader title="Elige la convocatoria" />
      <CatalogSearchList
        items={editions.map((edition) => ({
          id: edition.id,
          href: `/simulador/ediciones/${edition.id}`,
          title: edition.label ?? `Convocatoria ${edition.year}`,
          subtitle: String(edition.year),
        }))}
        emptyMessage="Todavía no hay convocatorias para esta comunidad."
        searchPlaceholder="Buscar convocatoria..."
      />
    </div>
  );
}
