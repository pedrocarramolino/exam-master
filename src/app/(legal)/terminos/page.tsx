export const metadata = { title: 'Términos de uso' };

const LAST_UPDATED = '16 de julio de 2026';

export default function TermsPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Términos de uso</h1>
      <p className="text-muted-foreground text-sm">Última actualización: {LAST_UPDATED}</p>

      <p className="text-muted-foreground text-sm italic">
        Este es un texto base de carácter general. Antes de operar con usuarios reales, revísalo y
        adáptalo con asesoramiento legal a tu caso concreto.
      </p>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">1. Objeto</h2>
        <p className="text-sm">
          ExamMaster (en adelante, «la Plataforma») es una aplicación web que permite realizar
          simulacros de exámenes de oposiciones con fines de práctica y autoevaluación. Al
          registrarte y utilizar la Plataforma aceptas estos términos.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">2. Registro y cuenta</h2>
        <p className="text-sm">
          Para acceder a las funciones de práctica debes crear una cuenta con datos veraces. Eres
          responsable de mantener la confidencialidad de tu contraseña y de toda la actividad
          realizada desde tu cuenta.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">3. Uso permitido</h2>
        <p className="text-sm">
          Te comprometes a usar la Plataforma de forma lícita y personal. No está permitido intentar
          acceder a áreas restringidas, extraer masivamente el contenido, ni interferir en el
          funcionamiento del servicio.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">4. Contenido de los exámenes</h2>
        <p className="text-sm">
          El contenido se ofrece con fines formativos y de práctica. No garantizamos que coincida
          exactamente con exámenes oficiales vigentes ni que esté libre de errores. La Plataforma no
          sustituye a las fuentes oficiales de cada convocatoria.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">5. Limitación de responsabilidad</h2>
        <p className="text-sm">
          La Plataforma se ofrece «tal cual». En la medida permitida por la ley, no nos hacemos
          responsables de las decisiones que tomes basándote en los resultados de los simulacros.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">6. Modificaciones y cancelación</h2>
        <p className="text-sm">
          Podemos actualizar estos términos y las funcionalidades de la Plataforma. Puedes dejar de
          usar el servicio y solicitar la eliminación de tu cuenta en cualquier momento.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">7. Contacto</h2>
        <p className="text-sm">
          Para cualquier consulta sobre estos términos, escribe a{' '}
          <a href="mailto:pedrocarramolino34@gmail.com" className="underline">
            pedrocarramolino34@gmail.com
          </a>
          .
        </p>
      </section>
    </>
  );
}
