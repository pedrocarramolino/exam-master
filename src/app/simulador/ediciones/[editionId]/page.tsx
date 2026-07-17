import { CatalogSearchList } from '@/shared/components/catalog-search-list';
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
      <CatalogSearchList
        items={exams.map((exam) => ({
          id: exam.id,
          href: `/simulador/examenes/${exam.id}`,
          title: exam.title,
          subtitle: `${exam.durationMinutes} minutos`,
        }))}
        emptyMessage="Todavía no hay exámenes para esta convocatoria."
        searchPlaceholder="Buscar examen..."
      />
    </div>
  );
}
