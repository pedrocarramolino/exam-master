import { BarChart3, CheckCircle2, ClipboardCheck, Smartphone, Timer } from 'lucide-react';
import Link from 'next/link';

import { SiteFooter } from '@/shared/components/site-footer';
import { ThemeToggle } from '@/shared/components/theme-toggle';
import { Badge } from '@/shared/components/ui/badge';
import { buttonVariants } from '@/shared/components/ui/button';
import { getCurrentUser } from '@/infrastructure/firebase/session';

const FEATURES = [
  {
    icon: ClipboardCheck,
    title: 'Exámenes reales',
    description:
      'Practica con simulacros organizados por oposición, comunidad y convocatoria, igual que el examen oficial.',
  },
  {
    icon: CheckCircle2,
    title: 'Corrección al instante',
    description:
      'Al terminar ves tu nota, el tiempo empleado y una revisión pregunta a pregunta con explicación.',
  },
  {
    icon: BarChart3,
    title: 'Sigue tu progreso',
    description:
      'Nota media, mejor y peor resultado, y tu evolución por tema a lo largo del tiempo.',
  },
  {
    icon: Smartphone,
    title: 'Instálala como app',
    description:
      'Funciona en el móvil, la tablet o el ordenador, y se instala sin pasar por ninguna tienda.',
  },
];

export default async function HomePage() {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="mx-auto flex h-14 max-w-4xl items-center gap-2 px-4">
          <Link href="/" className="mr-auto flex items-center gap-2 font-semibold">
            <span className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-lg text-sm font-bold">
              E
            </span>
            ExamMaster
          </Link>
          {user ? (
            <Link href="/perfil" className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
              Mi perfil
            </Link>
          ) : (
            <>
              <Link href="/login" className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
                Iniciar sesión
              </Link>
              <Link href="/registro" className={buttonVariants({ size: 'sm' })}>
                Crear cuenta
              </Link>
            </>
          )}
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center">
          <Badge variant="secondary">Gratis · Sin anuncios</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Aprueba tu oposición practicando de verdad
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg text-balance">
            Simulacros de Maestro Primaria, Policía Nacional, Guardia Civil, AGE y más — con
            corrección, tiempos y estadísticas de cada intento.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={user ? '/simulador' : '/registro'}
              className={buttonVariants({ size: 'lg' })}
            >
              {user ? 'Ir al simulador' : 'Empezar gratis'}
            </Link>
            <Link href="/simulador" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
              Ver oposiciones
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-20">
          <div className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-2 rounded-2xl border p-5">
                <div className="bg-accent text-accent-foreground flex size-9 items-center justify-center rounded-xl">
                  <Icon className="size-5" />
                </div>
                <h2 className="font-medium">{title}</h2>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-muted/40 border-y">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
            <Timer className="text-primary size-8" />
            <h2 className="text-2xl font-semibold">¿Lista tu próxima convocatoria?</h2>
            <p className="text-muted-foreground max-w-md">
              Elige tu oposición y empieza tu primer simulacro en menos de un minuto.
            </p>
            <Link
              href={user ? '/simulador' : '/registro'}
              className={buttonVariants({ size: 'lg' })}
            >
              {user ? 'Ir al simulador' : 'Crear mi cuenta gratis'}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
