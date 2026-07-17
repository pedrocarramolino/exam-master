import { deleteTopicAction } from '@/features/admin/actions/topics';
import { DeleteButton } from '@/features/admin/components/delete-button';
import { TopicForm } from '@/features/admin/components/topic-form';
import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';
import { PageHeader } from '@/shared/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
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
      <PageHeader
        title="Temas"
        backHref={`/admin/categories/${categoryId}`}
        backLabel="Oposición"
      />

      <Card>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4">Nombre</TableHead>
                <TableHead className="pr-4 text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topics.map((topic) => (
                <TableRow key={topic.id}>
                  <TableCell className="pl-4">{topic.name}</TableCell>
                  <TableCell className="flex justify-end gap-2 pr-4">
                    <DeleteButton
                      action={deleteTopicAction.bind(null, categoryId, topic.id)}
                      confirmMessage={`¿Eliminar el tema "${topic.name}"?`}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nuevo tema</CardTitle>
        </CardHeader>
        <CardContent>
          <TopicForm categoryId={categoryId} />
        </CardContent>
      </Card>
    </div>
  );
}
