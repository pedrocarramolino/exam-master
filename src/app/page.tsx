import { redirect } from 'next/navigation';

// La home redirige al catálogo del simulador. En la Fase 8 (pulido) se
// sustituirá por una landing propia.
export default function HomePage() {
  redirect('/simulador');
}
