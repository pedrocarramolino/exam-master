import { CatalogLinkCard } from '@/shared/components/catalog-link-card';
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
      <div className="flex flex-col gap-3">
        {groups.map((group) => (
          <CatalogLinkCard
            key={group.id}
            href={`/simulador/grupos/${group.id}`}
            title={group.name}
          />
        ))}
        {groups.length === 0 && (
          <p className="text-muted-foreground text-sm">
            Todavía no hay comunidades para esta oposición.
          </p>
        )}
      </div>
    </div>
  );
}
