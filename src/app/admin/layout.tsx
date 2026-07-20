import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { DataConnectUserRoleRepository } from '@/infrastructure/firebase/user-role-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';
import { Badge } from '@/shared/components/ui/badge';

const userRoleRepository = new DataConnectUserRoleRepository();

export const metadata = { title: 'Panel de administración' };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  const role = await userRoleRepository.getRole(user.id);
  if (role !== 'ADMIN') redirect('/perfil');

  return (
    <div className="bg-muted/30 min-h-screen">
      <header className="bg-background border-b px-4 py-4 sm:px-6">
        <nav className="mx-auto flex max-w-5xl items-center gap-2 text-sm sm:gap-4">
          <Link
            href="/admin/categories"
            aria-label="ExamMaster Admin"
            className="flex items-center gap-2 font-semibold"
          >
            <span className="bg-primary text-primary-foreground flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-bold">
              E
            </span>
            <span className="hidden sm:inline" aria-hidden="true">
              ExamMaster Admin
            </span>
          </Link>
          <Badge variant="secondary" className="gap-1">
            <ShieldCheck className="size-3.5" />
            <span className="hidden sm:inline">Admin</span>
          </Badge>
          <Link
            href="/admin/categories"
            className="text-muted-foreground hover:text-foreground hidden sm:inline-block"
          >
            Oposiciones
          </Link>
          <Link
            href="/perfil"
            aria-label="Volver a la app"
            className="text-muted-foreground hover:text-foreground ml-auto flex items-center gap-1.5"
          >
            <ArrowLeft className="size-4 sm:hidden" />
            <span className="hidden sm:inline">Volver</span>
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
