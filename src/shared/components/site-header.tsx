'use client';

import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ThemeToggle } from '@/shared/components/theme-toggle';
import { cn } from '@/shared/lib/utils';

const NAV_LINKS = [
  { href: '/simulador', label: 'Simulador' },
  { href: '/estadisticas', label: 'Estadísticas' },
  { href: '/perfil', label: 'Perfil' },
];

export function SiteHeader({ isAdmin = false }: { isAdmin?: boolean }) {
  const pathname = usePathname();

  return (
    <header className="bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-2xl items-center gap-1 px-4">
        <Link href="/simulador" className="mr-4 flex items-center gap-2 font-semibold">
          <span className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-lg text-sm font-bold">
            E
          </span>
          ExamMaster
        </Link>
        <nav aria-label="Principal" className="flex flex-1 items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        {isAdmin && (
          <Link
            href="/admin/categories"
            className="text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
          >
            <ShieldCheck className="size-4" />
            Admin
          </Link>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
