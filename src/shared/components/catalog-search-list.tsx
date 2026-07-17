'use client';

import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import { CatalogLinkCard } from '@/shared/components/catalog-link-card';
import { EmptyState } from '@/shared/components/empty-state';
import { Input } from '@/shared/components/ui/input';

export interface CatalogItem {
  id: string;
  href: string;
  title: string;
  subtitle?: string | null;
}

export function CatalogSearchList({
  items,
  emptyMessage,
  searchPlaceholder = 'Buscar...',
}: {
  items: CatalogItem[];
  emptyMessage: string;
  searchPlaceholder?: string;
}) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) => item.title.toLowerCase().includes(q) || item.subtitle?.toLowerCase().includes(q),
    );
  }, [items, query]);

  if (items.length === 0) {
    return <EmptyState message={emptyMessage} />;
  }

  return (
    <div className="flex flex-col gap-3">
      {items.length > 5 && (
        <div className="relative">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="pl-9"
          />
        </div>
      )}
      {filtered.map((item) => (
        <CatalogLinkCard
          key={item.id}
          href={item.href}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
      {filtered.length === 0 && (
        <p className="text-muted-foreground py-4 text-center text-sm">
          Sin resultados para &quot;{query}&quot;.
        </p>
      )}
    </div>
  );
}
