import type { AuthUser } from '@/domain/entities/auth-user';

export interface RegisterInput {
  email: string;
  password: string;
  displayName: string;
}

export interface AuthRepository {
  register(input: RegisterInput): Promise<AuthUser>;
  login(email: string, password: string): Promise<AuthUser>;
  logout(): Promise<void>;
  sendPasswordReset(email: string): Promise<void>;
  getIdToken(): Promise<string | null>;
}
