import Link from 'next/link';

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
      <h1 className="mb-6 text-xl font-semibold">Elige el examen</h1>
      <div className="flex flex-col gap-3">
        {exams.map((exam) => (
          <Link
            key={exam.id}
            href={`/simulador/examenes/${exam.id}`}
            className="hover:bg-muted rounded-lg border p-4"
          >
            <p className="font-medium">{exam.title}</p>
            <p className="text-muted-foreground text-sm">{exam.durationMinutes} minutos</p>
          </Link>
        ))}
        {exams.length === 0 && (
          <p className="text-muted-foreground text-sm">
            Todavía no hay exámenes para esta convocatoria.
          </p>
        )}
      </div>
    </div>
  );
}
