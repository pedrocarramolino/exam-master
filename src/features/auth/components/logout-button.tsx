'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/shared/components/ui/button';
import { FirebaseAuthRepository } from '@/infrastructure/firebase/auth-repository';

const authRepository = new FirebaseAuthRepository();

export function LogoutButton() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleLogout() {
    setIsSubmitting(true);
    try {
      await Promise.all([
        authRepository.logout(),
        fetch('/api/auth/session', { method: 'DELETE' }),
      ]);
      router.push('/login');
      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Button variant="outline" onClick={handleLogout} disabled={isSubmitting}>
      {isSubmitting ? 'Cerrando sesión...' : 'Cerrar sesión'}
    </Button>
  );
}
