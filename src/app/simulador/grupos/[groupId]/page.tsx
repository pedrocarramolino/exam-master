import Link from 'next/link';

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
      <h1 className="mb-6 text-xl font-semibold">Elige la convocatoria</h1>
      <div className="flex flex-col gap-3">
        {editions.map((edition) => (
          <Link
            key={edition.id}
            href={`/simulador/ediciones/${edition.id}`}
            className="hover:bg-muted rounded-lg border p-4"
          >
            <p className="font-medium">{edition.label ?? `Convocatoria ${edition.year}`}</p>
            <p className="text-muted-foreground text-sm">{edition.year}</p>
          </Link>
        ))}
        {editions.length === 0 && (
          <p className="text-muted-foreground text-sm">
            Todavía no hay convocatorias para esta comunidad.
          </p>
        )}
      </div>
    </div>
  );
}
