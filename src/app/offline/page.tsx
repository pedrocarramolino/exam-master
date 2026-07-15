export const metadata = { title: 'Sin conexión' };

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 p-4 text-center">
      <h1 className="text-xl font-semibold">Sin conexión</h1>
      <p className="text-muted-foreground max-w-sm text-sm">
        No hay conexión a internet. Comprueba tu red y vuelve a intentarlo: tus respuestas guardadas
        siguen a salvo.
      </p>
    </div>
  );
}
