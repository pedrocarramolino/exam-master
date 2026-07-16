import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export function PageHeader({
  title,
  description,
  backHref,
  backLabel,
}: {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="mb-6 flex flex-col gap-1">
      {backHref && (
        <Link
          href={backHref}
          className="text-muted-foreground hover:text-foreground -ml-1 flex w-fit items-center gap-0.5 text-sm"
        >
          <ChevronLeft className="size-4" />
          {backLabel ?? 'Volver'}
        </Link>
      )}
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      {description && <p className="text-muted-foreground text-sm">{description}</p>}
    </div>
  );
}
