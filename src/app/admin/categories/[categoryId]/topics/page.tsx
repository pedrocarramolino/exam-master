import Link from 'next/link';

import { deleteTopicAction } from '@/features/admin/actions/topics';
import { DeleteButton } from '@/features/admin/components/delete-button';
import { TopicForm } from '@/features/admin/components/topic-form';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table';

const contentRepository = new DataConnectContentRepository();

export default async function AdminTopicsPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  const topics = await contentRepository.listTopics(categoryId);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link
          href={`/admin/categories/${categoryId}`}
          className="text-muted-foreground text-sm hover:underline"
        >
          ← Volver a la oposición
        </Link>
        <h1 className="mt-1 text-xl font-semibold">Temas</h1>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topics.map((topic) => (
            <TableRow key={topic.id}>
              <TableCell>{topic.name}</TableCell>
              <TableCell className="flex justify-end gap-2">
                <DeleteButton
                  action={deleteTopicAction.bind(null, categoryId, topic.id)}
                  confirmMessage={`¿Eliminar el tema "${topic.name}"?`}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TopicForm categoryId={categoryId} />
    </div>
  );
}
