import { Skeleton } from '@/shared/components/ui/skeleton';

export function CatalogListSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="mb-6 flex flex-col gap-1">
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="flex flex-col gap-3">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 rounded-2xl border p-4">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-3 w-1/3" />
            </div>
            <Skeleton className="size-5 shrink-0 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
