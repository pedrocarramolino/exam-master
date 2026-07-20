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
      <div className="mx-auto flex h-14 max-w-2xl items-center gap-1 px-3 sm:px-4">
        <Link
          href="/simulador"
          aria-label="ExamMaster"
          className="mr-2 flex shrink-0 items-center gap-2 font-semibold sm:mr-4"
        >
          <span className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-lg text-sm font-bold">
            E
          </span>
          <span className="hidden sm:inline" aria-hidden="true">
            ExamMaster
          </span>
        </Link>
        <nav aria-label="Principal" className="flex flex-1 items-center gap-0.5 sm:gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'rounded-lg px-2 py-1.5 text-sm font-medium whitespace-nowrap transition-colors sm:px-3',
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
            aria-label="Admin"
            className="text-muted-foreground hover:text-foreground hover:bg-muted flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium transition-colors sm:px-3"
          >
            <ShieldCheck className="size-4" />
            <span className="hidden sm:inline">Admin</span>
          </Link>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
