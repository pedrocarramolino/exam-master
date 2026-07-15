'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/shared/components/ui/button';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // El icono visible se decide por CSS (clase .dark), no por estado de React:
  // así no hay desajuste de hidratación ni flash al cargar.
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Cambiar entre modo claro y oscuro"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="hidden dark:block" />
      <Moon className="dark:hidden" />
    </Button>
  );
}
