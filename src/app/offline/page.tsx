import { WifiOff } from 'lucide-react';

export const metadata = { title: 'Sin conexión' };

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <div className="bg-muted text-muted-foreground flex size-14 items-center justify-center rounded-full">
        <WifiOff className="size-6" />
      </div>
      <h1 className="text-xl font-semibold">Sin conexión</h1>
      <p className="text-muted-foreground max-w-sm text-sm">
        No hay conexión a internet. Comprueba tu red y vuelve a intentarlo: tus respuestas guardadas
        siguen a salvo.
      </p>
    </div>
  );
}
