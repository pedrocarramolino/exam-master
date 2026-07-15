import Link from 'next/link';

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
      <Link href="/simulador" className="text-muted-foreground text-sm hover:underline">
        ← Oposiciones
      </Link>
      <h1 className="mt-1 mb-6 text-xl font-semibold">Elige tu comunidad</h1>
      <div className="flex flex-col gap-3">
        {groups.map((group) => (
          <Link
            key={group.id}
            href={`/simulador/grupos/${group.id}`}
            className="hover:bg-muted rounded-lg border p-4"
          >
            <p className="font-medium">{group.name}</p>
          </Link>
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
