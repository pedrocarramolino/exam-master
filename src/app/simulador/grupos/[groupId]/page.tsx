import { CatalogLinkCard } from '@/shared/components/catalog-link-card';
import { EmptyState } from '@/shared/components/empty-state';
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
      <div className="flex flex-col gap-3">
        {editions.map((edition) => (
          <CatalogLinkCard
            key={edition.id}
            href={`/simulador/ediciones/${edition.id}`}
            title={edition.label ?? `Convocatoria ${edition.year}`}
            subtitle={String(edition.year)}
          />
        ))}
        {editions.length === 0 && (
          <EmptyState message="Todavía no hay convocatorias para esta comunidad." />
        )}
      </div>
    </div>
  );
}
