'use client';

import { useTransition } from 'react';

import { Button } from '@/shared/components/ui/button';

export function DeleteButton({
  action,
  confirmMessage,
}: {
  action: () => Promise<void>;
  confirmMessage: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      disabled={isPending}
      onClick={() => {
        if (!window.confirm(confirmMessage)) return;
        startTransition(() => {
          void action();
        });
      }}
    >
      {isPending ? 'Borrando...' : 'Eliminar'}
    </Button>
  );
}
