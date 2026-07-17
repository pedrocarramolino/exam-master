import { DataConnectUserRoleRepository } from '@/infrastructure/firebase/user-role-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';
import { SiteHeader } from '@/shared/components/site-header';
import { SiteFooter } from '@/shared/components/site-footer';

const userRoleRepository = new DataConnectUserRoleRepository();

export default async function SimulatorLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  const role = user ? await userRoleRepository.getRole(user.id) : null;

  return (
    <>
      <SiteHeader isAdmin={role === 'ADMIN'} />
      <main className="animate-in fade-in flex-1 duration-300">{children}</main>
      <SiteFooter />
    </>
  );
}
