import { Card, CardHeader } from '@/shared/components/ui/card';
import { Skeleton } from '@/shared/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-4">
      <Skeleton className="h-8 w-40" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="gap-2 pb-2">
              <Skeleton className="size-8 rounded-lg" />
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-6 w-12" />
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-32 w-full" />
        </CardHeader>
      </Card>
    </div>
  );
}
