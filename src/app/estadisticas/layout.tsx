import { SiteHeader } from '@/shared/components/site-header';
import { SiteFooter } from '@/shared/components/site-footer';

export default function StatisticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="animate-in fade-in flex-1 duration-300">{children}</main>
      <SiteFooter />
    </>
  );
}
