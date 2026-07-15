# ExamMaster

PWA para simulacros de oposiciones (Maestro Primaria, Policía Nacional, Guardia Civil, AGE, ...).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript estricto
- Tailwind CSS v4 + shadcn/ui (estilo `base-nova`)
- Firebase: Auth + Data Connect (PostgreSQL/Cloud SQL con API GraphQL generado)
- ESLint (flat config) + Prettier (+ `prettier-plugin-tailwindcss`)

## Arquitectura

El código en `src/` sigue Clean Architecture + Feature-First:

| Carpeta               | Responsabilidad                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------ |
| `src/domain/`         | Entidades y contratos de repositorio (interfaces). Sin dependencias externas.                                |
| `src/application/`    | Casos de uso: orquestan el dominio, siguen sin depender de Next.js ni Firebase.                              |
| `src/infrastructure/` | Adaptadores concretos: SDKs de Firebase (cliente y Admin), implementaciones de los repositorios del dominio. |
| `src/features/`       | UI organizada por feature (`auth`, `simulador`, `admin`, `estadisticas`, ...).                               |
| `src/shared/`         | Componentes UI reutilizables (shadcn), utilidades, configuración validada de entorno.                        |
| `src/app/`            | Rutas de Next.js (App Router). Solo composición: páginas delgadas que usan `features/`.                      |

Regla de dependencia: `app` y `features` pueden depender de `application` y `domain`; `infrastructure` implementa interfaces de `domain`; `domain` no depende de nada.

### Firebase

| Carpeta/archivo                         | Responsabilidad                                                                                                  |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `src/infrastructure/firebase/client.ts` | Firebase App + Auth para Client Components (config pública, segura en el navegador).                             |
| `src/infrastructure/firebase/admin.ts`  | Firebase Admin App + Auth para Server Components/Actions (credenciales de cuenta de servicio, `server-only`).    |
| `src/shared/config/env.client.ts`       | Validación (zod) de la config pública del SDK cliente.                                                           |
| `src/shared/config/env.server.ts`       | Validación (zod) de las credenciales de la cuenta de servicio, protegida con `server-only`.                      |
| `dataconnect/`                          | Esquema y conectores GraphQL de Firebase Data Connect (Postgres/Cloud SQL). Esquema real pendiente de la Fase 1. |

## Puesta en marcha

1. Instala dependencias:

   ```bash
   npm install
   ```

2. Crea un proyecto en [Firebase Console](https://console.firebase.google.com), copia `.env.local.example` a `.env.local` y rellena:
   - **Config pública** (`NEXT_PUBLIC_FIREBASE_*`): Project settings → General → tu app web.
   - **Cuenta de servicio** (`FIREBASE_*` sin prefijo): Project settings → Service accounts → Generate new private key.

   ```bash
   cp .env.local.example .env.local
   ```

3. Arranca el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando                | Descripción                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Servidor de desarrollo (Turbopack)       |
| `npm run build`        | Build de producción                      |
| `npm run start`        | Sirve el build de producción             |
| `npm run lint`         | ESLint                                   |
| `npm run format`       | Formatea con Prettier                    |
| `npm run format:check` | Verifica formato sin escribir            |
| `npm run typecheck`    | Comprueba tipos de TypeScript sin emitir |

## Notas de la versión de Next.js

Este proyecto usa Next.js 16, que introduce cambios respecto a versiones anteriores relevantes para el desarrollo:

- El archivo de middleware se llama `proxy.ts` (no `middleware.ts`) y exporta una función `proxy` (no `middleware`). Solo corre en runtime `nodejs`. Aún no existe en este proyecto: se añadirá en la Fase 2 al construir la protección de rutas autenticadas.
- Las APIs de request (`cookies()`, `headers()`, `params`, `searchParams`) son siempre asíncronas.
