import type { AuthUser } from '@/domain/entities/auth-user';
import type { AuthRepository, RegisterInput } from '@/domain/repositories/auth-repository';
import type { UserRepository } from '@/domain/repositories/user-repository';

export async function registerUser(
  authRepository: AuthRepository,
  userRepository: UserRepository,
  input: RegisterInput,
): Promise<AuthUser> {
  const user = await authRepository.register(input);
  await userRepository.upsertProfile({ email: user.email, displayName: user.displayName });
  return user;
}
