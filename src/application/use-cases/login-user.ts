import type { AuthUser } from '@/domain/entities/auth-user';
import type { AuthRepository } from '@/domain/repositories/auth-repository';
import type { UserRepository } from '@/domain/repositories/user-repository';

export async function loginUser(
  authRepository: AuthRepository,
  userRepository: UserRepository,
  email: string,
  password: string,
): Promise<AuthUser> {
  const user = await authRepository.login(email, password);
  // Sincroniza el perfil por si cambió desde otro dispositivo o es la primera vez que se loguea.
  await userRepository.upsertProfile({ email: user.email, displayName: user.displayName });
  return user;
}
