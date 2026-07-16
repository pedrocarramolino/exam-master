import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Tarjeta de navegación reutilizada en las 4 páginas del catálogo del
 * simulador (categorías, grupos, ediciones, exámenes): mismo look & feel,
 * un único sitio que mantener.
 */
export function CatalogLinkCard({
  href,
  title,
  subtitle,
}: {
  href: string;
  title: string;
  subtitle?: string | null;
}) {
  return (
    <Link
      href={href}
      className="group hover:border-primary/40 hover:bg-accent/50 flex items-center gap-3 rounded-2xl border p-4 transition-colors"
    >
      <div className="min-w-0 flex-1">
        <p className="group-hover:text-primary font-medium transition-colors">{title}</p>
        {subtitle && <p className="text-muted-foreground truncate text-sm">{subtitle}</p>}
      </div>
      <ChevronRight className="text-muted-foreground group-hover:text-primary size-5 shrink-0 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
