export type UserRole = 'STUDENT' | 'ADMIN';

export interface UserRoleRepository {
  getRole(userId: string): Promise<UserRole | null>;
}
