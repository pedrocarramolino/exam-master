import { z } from 'zod';

export const registerSchema = z.object({
  displayName: z.string().min(2, 'Escribe al menos 2 caracteres.'),
  email: z.string().email('Introduce un email válido.'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres.'),
});
export type RegisterFormValues = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email('Introduce un email válido.'),
  password: z.string().min(1, 'Introduce tu contraseña.'),
});
export type LoginFormValues = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email('Introduce un email válido.'),
});
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
