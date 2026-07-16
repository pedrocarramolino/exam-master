import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-muted/40 flex min-h-screen flex-col items-center justify-center gap-6 p-4">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg text-base font-bold">
          E
        </span>
        ExamMaster
      </Link>
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
