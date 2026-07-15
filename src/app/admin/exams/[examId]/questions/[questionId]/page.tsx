import Link from 'next/link';
import { notFound } from 'next/navigation';

import { QuestionForm } from '@/features/admin/components/question-form';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';

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
      <Link
        href={`/admin/exams/${examId}?editionId=${editionId ?? ''}&categoryId=${categoryId ?? ''}`}
        className="text-muted-foreground text-sm hover:underline"
      >
        ← Volver a las preguntas
      </Link>
      <h1 className="text-xl font-semibold">Editar pregunta</h1>
      <QuestionForm examId={examId} topics={topics} question={question} />
    </div>
  );
}
