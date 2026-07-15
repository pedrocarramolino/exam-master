export type AuthErrorCode =
  | 'invalid-credentials'
  | 'email-already-in-use'
  | 'weak-password'
  | 'user-not-found'
  | 'too-many-requests'
  | 'unknown';

/**
 * Error de autenticación agnóstico del proveedor: la capa de infraestructura
 * traduce los códigos de error de Firebase a esto, para que el dominio y la UI
 * nunca dependan directamente de la forma de los errores de Firebase.
 */
export class AuthError extends Error {
  constructor(
    public readonly code: AuthErrorCode,
    message: string,
  ) {
    super(message);
    this.name = 'AuthError';
  }
}

const MESSAGES_BY_CODE: Record<AuthErrorCode, string> = {
  'invalid-credentials': 'Email o contraseña incorrectos.',
  'email-already-in-use': 'Ya existe una cuenta con ese email.',
  'weak-password': 'La contraseña debe tener al menos 6 caracteres.',
  'user-not-found': 'No existe ninguna cuenta con ese email.',
  'too-many-requests': 'Demasiados intentos. Inténtalo de nuevo en unos minutos.',
  unknown: 'Ha ocurrido un error inesperado. Inténtalo de nuevo.',
};

export function authErrorMessage(code: AuthErrorCode): string {
  return MESSAGES_BY_CODE[code];
}
