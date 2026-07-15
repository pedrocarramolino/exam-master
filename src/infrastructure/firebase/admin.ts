import 'server-only';

import { type App, cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

import { serverEnv } from '@/shared/config/env.server';

/**
 * Firebase Admin App para Server Components, Server Actions y Route Handlers.
 * Usa credenciales de cuenta de servicio: nunca debe importarse desde código de cliente.
 */
function getFirebaseAdminApp(): App {
  if (getApps().length) {
    return getApps()[0]!;
  }

  return initializeApp({
    credential: cert({
      projectId: serverEnv.FIREBASE_PROJECT_ID,
      clientEmail: serverEnv.FIREBASE_CLIENT_EMAIL,
      privateKey: serverEnv.FIREBASE_PRIVATE_KEY,
    }),
  });
}

export const firebaseAdminApp = getFirebaseAdminApp();
export const firebaseAdminAuth = getAuth(firebaseAdminApp);
