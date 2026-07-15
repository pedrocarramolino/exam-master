import 'server-only';

import { z } from 'zod';

const serverEnvSchema = z.object({
  FIREBASE_PROJECT_ID: z.string().min(1),
  FIREBASE_CLIENT_EMAIL: z.string().email(),
  // Viene con saltos de línea escapados (\n) en la variable de entorno.
  FIREBASE_PRIVATE_KEY: z
    .string()
    .min(1)
    .transform((key) => key.replace(/\\n/g, '\n')),
});

/**
 * Credenciales de la cuenta de servicio para el Admin SDK de Firebase.
 * `import "server-only"` hace que el build falle si este módulo se cuela en un bundle de cliente.
 */
export const serverEnv = serverEnvSchema.parse({
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
});
