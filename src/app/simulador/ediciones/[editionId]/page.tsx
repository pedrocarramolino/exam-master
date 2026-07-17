import { CatalogLinkCard } from '@/shared/components/catalog-link-card';
import { EmptyState } from '@/shared/components/empty-state';
import { PageHeader } from '@/shared/components/page-header';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';

const contentRepository = new DataConnectContentRepository();

export default async function SimulatorExamsPage({
  params,
}: {
  params: Promise<{ editionId: string }>;
}) {
  const { editionId } = await params;
  const exams = await contentRepository.listExams(editionId);

  return (
    <div className="mx-auto max-w-2xl p-4">
      <PageHeader title="Elige el examen" />
      <div className="flex flex-col gap-3">
        {exams.map((exam) => (
          <CatalogLinkCard
            key={exam.id}
            href={`/simulador/examenes/${exam.id}`}
            title={exam.title}
            subtitle={`${exam.durationMinutes} minutos`}
          />
        ))}
        {exams.length === 0 && (
          <EmptyState message="Todavía no hay exámenes para esta convocatoria." />
        )}
      </div>
    </div>
  );
}
