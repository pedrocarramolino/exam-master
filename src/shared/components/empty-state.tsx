import { Inbox, type LucideIcon } from 'lucide-react';

export function EmptyState({
  icon: Icon = Inbox,
  message,
}: {
  icon?: LucideIcon;
  message: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed p-8 text-center">
      <div className="bg-muted text-muted-foreground flex size-11 items-center justify-center rounded-full">
        <Icon className="size-5" />
      </div>
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  );
}
