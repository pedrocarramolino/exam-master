export const metadata = { title: 'Política de privacidad' };

const LAST_UPDATED = '16 de julio de 2026';

export default function PrivacyPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Política de privacidad</h1>
      <p className="text-muted-foreground text-sm">Última actualización: {LAST_UPDATED}</p>

      <p className="text-muted-foreground text-sm italic">
        Este es un texto base de carácter general. El tratamiento real de datos personales está
        sujeto al RGPD y a la LOPDGDD; antes de operar con usuarios reales, revísalo y adáptalo con
        asesoramiento legal.
      </p>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">1. Responsable del tratamiento</h2>
        <p className="text-sm">
          El responsable del tratamiento de tus datos es el titular de ExamMaster. Para ejercer tus
          derechos o resolver dudas puedes escribir a{' '}
          <a href="mailto:pedrocarramolino34@gmail.com" className="underline">
            pedrocarramolino34@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">2. Datos que recogemos</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>
            Datos de registro: nombre, dirección de correo electrónico y contraseña (cifrada).
          </li>
          <li>
            Datos de actividad: exámenes realizados, respuestas, puntuaciones y tiempos, para
            ofrecerte tus resultados y estadísticas.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">3. Finalidad y base jurídica</h2>
        <p className="text-sm">
          Tratamos tus datos para prestar el servicio (ejecución del contrato al aceptar estos
          términos): autenticarte, guardar tu progreso y mostrarte tus estadísticas. No usamos tus
          datos con fines publicitarios.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">4. Encargados y proveedores</h2>
        <p className="text-sm">
          Utilizamos servicios de terceros para el funcionamiento de la Plataforma: Google Firebase
          (autenticación y base de datos) y Vercel (alojamiento). Estos proveedores tratan los datos
          por cuenta nuestra conforme a sus condiciones.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">5. Conservación</h2>
        <p className="text-sm">
          Conservamos tus datos mientras mantengas la cuenta activa. Si solicitas su eliminación,
          borraremos tu cuenta y los datos asociados, salvo los que debamos conservar por obligación
          legal.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">6. Tus derechos</h2>
        <p className="text-sm">
          Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y
          portabilidad escribiendo al correo indicado arriba. También puedes reclamar ante la
          Agencia Española de Protección de Datos (AEPD).
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">7. Seguridad</h2>
        <p className="text-sm">
          Aplicamos medidas técnicas para proteger tus datos: contraseñas gestionadas por el
          proveedor de identidad, conexiones cifradas (HTTPS) y control de acceso a las áreas
          privadas.
        </p>
      </section>
    </>
  );
}
