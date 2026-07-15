import { upsertUser } from '@dataconnect/generated';

import type { UpsertUserProfileInput, UserRepository } from '@/domain/repositories/user-repository';
// Efecto lateral: garantiza que initializeApp() ya se ejecutó antes de llamar al SDK generado.
import '@/infrastructure/firebase/client';

export class DataConnectUserRepository implements UserRepository {
  async upsertProfile({ email, displayName }: UpsertUserProfileInput): Promise<void> {
    await upsertUser({ email, displayName: displayName ?? undefined });
  }
}
