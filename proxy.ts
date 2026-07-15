import { type NextRequest } from 'next/server';

import { protectRoute } from '@/infrastructure/firebase/proxy';

export async function proxy(request: NextRequest) {
  return protectRoute(request);
}

// Rutas que exigen sesión. Se amplía según se construyan admin/simulador.
export const config = {
  matcher: ['/perfil/:path*'],
};
