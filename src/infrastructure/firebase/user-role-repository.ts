import 'server-only';

import type { GetUserRoleData, GetUserRoleVariables } from '@dataconnect/generated';

import type { UserRole, UserRoleRepository } from '@/domain/repositories/user-role-repository';
import { dataConnectAdmin } from '@/infrastructure/firebase/data-connect-admin';

export class DataConnectUserRoleRepository implements UserRoleRepository {
  async getRole(userId: string): Promise<UserRole | null> {
    const { data } = await dataConnectAdmin.executeQuery<GetUserRoleData, GetUserRoleVariables>(
      'GetUserRole',
      { userId },
    );
    return (data.user?.role as UserRole | undefined) ?? null;
  }
}
