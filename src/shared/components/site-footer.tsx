import Link from 'next/link';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-muted-foreground border-t py-6 text-sm">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 px-4 sm:flex-row sm:justify-between">
        <p>© {year} ExamMaster</p>
        <nav aria-label="Enlaces legales" className="flex gap-4">
          <Link href="/terminos" className="hover:text-foreground hover:underline">
            Términos de uso
          </Link>
          <Link href="/privacidad" className="hover:text-foreground hover:underline">
            Privacidad
          </Link>
        </nav>
      </div>
    </footer>
  );
}
