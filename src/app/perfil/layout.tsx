import { SiteHeader } from '@/shared/components/site-header';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="animate-in fade-in flex-1 duration-300">{children}</main>
    </>
  );
}
