'use client';

import { AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';

import { Button } from '@/shared/components/ui/button';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <div className="bg-destructive/10 text-destructive flex size-14 items-center justify-center rounded-full">
        <AlertTriangle className="size-6" />
      </div>
      <h1 className="text-xl font-semibold">Algo ha ido mal</h1>
      <p className="text-muted-foreground max-w-sm text-sm">
        Ha ocurrido un error inesperado. Puedes intentarlo de nuevo o volver más tarde.
      </p>
      <Button onClick={() => reset()}>Reintentar</Button>
    </div>
  );
}
