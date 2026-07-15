import { type FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { clientEnv } from '@/shared/config/env.client';

/**
 * Firebase App para Client Components. `getApps()` evita reinicializar
 * durante Fast Refresh en desarrollo.
 */
function getFirebaseClientApp(): FirebaseApp {
  if (getApps().length) {
    return getApps()[0]!;
  }

  return initializeApp({
    apiKey: clientEnv.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: clientEnv.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: clientEnv.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: clientEnv.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: clientEnv.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: clientEnv.NEXT_PUBLIC_FIREBASE_APP_ID,
  });
}

export const firebaseApp = getFirebaseClientApp();
export const firebaseAuth = getAuth(firebaseApp);
