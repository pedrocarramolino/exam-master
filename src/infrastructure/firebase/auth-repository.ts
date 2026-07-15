import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User as FirebaseUser,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

import type { AuthUser } from '@/domain/entities/auth-user';
import { AuthError, authErrorMessage, type AuthErrorCode } from '@/domain/errors/auth-error';
import type { AuthRepository, RegisterInput } from '@/domain/repositories/auth-repository';
import { firebaseAuth } from '@/infrastructure/firebase/client';

function toAuthUser(user: FirebaseUser): AuthUser {
  return {
    id: user.uid,
    email: user.email ?? '',
    displayName: user.displayName,
    emailVerified: user.emailVerified,
  };
}

function toAuthErrorCode(error: unknown): AuthErrorCode {
  if (!(error instanceof FirebaseError)) return 'unknown';

  switch (error.code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/invalid-email':
      return 'invalid-credentials';
    case 'auth/email-already-in-use':
      return 'email-already-in-use';
    case 'auth/weak-password':
      return 'weak-password';
    case 'auth/user-not-found':
      return 'user-not-found';
    case 'auth/too-many-requests':
      return 'too-many-requests';
    default:
      return 'unknown';
  }
}

function toAuthError(error: unknown): AuthError {
  const code = toAuthErrorCode(error);
  return new AuthError(code, authErrorMessage(code));
}

export class FirebaseAuthRepository implements AuthRepository {
  async register({ email, password, displayName }: RegisterInput): Promise<AuthUser> {
    try {
      const credential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      await updateProfile(credential.user, { displayName });
      await sendEmailVerification(credential.user);
      return toAuthUser(credential.user);
    } catch (error) {
      throw toAuthError(error);
    }
  }

  async login(email: string, password: string): Promise<AuthUser> {
    try {
      const credential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      return toAuthUser(credential.user);
    } catch (error) {
      throw toAuthError(error);
    }
  }

  async logout(): Promise<void> {
    await signOut(firebaseAuth);
  }

  async sendPasswordReset(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(firebaseAuth, email);
    } catch (error) {
      throw toAuthError(error);
    }
  }

  async getIdToken(): Promise<string | null> {
    const user = firebaseAuth.currentUser;
    if (!user) return null;
    // Forzamos refresco: justo tras registrarse, el token cacheado es anterior a
    // updateProfile() y no llevaría el displayName en el claim "name".
    return user.getIdToken(true);
  }
}
