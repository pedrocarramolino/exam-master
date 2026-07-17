import { notFound } from 'next/navigation';

import { QuestionForm } from '@/features/admin/components/question-form';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import { PageHeader } from '@/shared/components/page-header';

const contentRepository = new DataConnectContentRepository();

export default async function AdminEditQuestionPage({
  params,
  searchParams,
}: {
  params: Promise<{ examId: string; questionId: string }>;
  searchParams: Promise<{ editionId?: string; categoryId?: string }>;
}) {
  const { examId, questionId } = await params;
  const { editionId, categoryId } = await searchParams;
  const [question, topics] = await Promise.all([
    contentRepository.getQuestion(questionId),
    categoryId ? contentRepository.listTopics(categoryId) : Promise.resolve([]),
  ]);
  if (!question) notFound();

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Editar pregunta"
        backHref={`/admin/exams/${examId}?editionId=${editionId ?? ''}&categoryId=${categoryId ?? ''}`}
        backLabel="Preguntas"
      />
      <QuestionForm examId={examId} topics={topics} question={question} />
    </div>
  );
}
