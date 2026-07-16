import 'server-only';

import { DataConnectUserRoleRepository } from '@/infrastructure/firebase/user-role-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';

const userRoleRepository = new DataConnectUserRoleRepository();

/**
 * Guardia obligatoria al inicio de CADA Server Action de administración.
 * El layout de /admin protege solo la UI: los Server Actions son endpoints
 * HTTP invocables directamente, así que cada uno debe autorizar por sí mismo.
 */
export async function requireAdmin(): Promise<void> {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error('No autenticado.');
  }
  const role = await userRoleRepository.getRole(user.id);
  if (role !== 'ADMIN') {
    throw new Error('No autorizado.');
  }
}
