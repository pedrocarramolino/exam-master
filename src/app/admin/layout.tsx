import Link from 'next/link';
import { redirect } from 'next/navigation';

import { DataConnectUserRoleRepository } from '@/infrastructure/firebase/user-role-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';

const userRoleRepository = new DataConnectUserRoleRepository();

export const metadata = { title: 'Panel de administración' };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  const role = await userRoleRepository.getRole(user.id);
  if (role !== 'ADMIN') redirect('/perfil');

  return (
    <div className="bg-muted/30 min-h-screen">
      <header className="bg-background border-b px-6 py-4">
        <nav className="mx-auto flex max-w-5xl items-center gap-4 text-sm">
          <Link href="/admin/categories" className="font-semibold">
            ExamMaster Admin
          </Link>
          <Link href="/admin/categories" className="text-muted-foreground hover:text-foreground">
            Oposiciones
          </Link>
          <Link href="/perfil" className="text-muted-foreground hover:text-foreground ml-auto">
            Volver a la app
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
    </div>
  );
}
