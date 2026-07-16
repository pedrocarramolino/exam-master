import Link from 'next/link';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10">
      <Link href="/simulador" className="text-muted-foreground text-sm hover:underline">
        ← Volver a ExamMaster
      </Link>
      <article className="prose-legal mt-6 flex flex-col gap-4">{children}</article>
    </div>
  );
}
