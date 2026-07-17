import { Compass } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/shared/components/ui/button';

export const metadata = { title: 'Página no encontrada' };

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <div className="bg-muted text-muted-foreground flex size-14 items-center justify-center rounded-full">
        <Compass className="size-6" />
      </div>
      <h1 className="text-xl font-semibold">Página no encontrada</h1>
      <p className="text-muted-foreground max-w-sm text-sm">
        La página que buscas no existe o se ha movido.
      </p>
      <Link href="/" className={buttonVariants({})}>
        Volver al inicio
      </Link>
    </div>
  );
}
