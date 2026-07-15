'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/shared/components/ui/button';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const DISMISSED_KEY = 'exammaster-install-dismissed';

/**
 * Banner de instalación: aparece cuando el navegador dispara beforeinstallprompt
 * (Chrome/Edge/Android). En iOS no existe ese evento; Safari usa "Añadir a
 * pantalla de inicio" manualmente.
 */
export function InstallBanner() {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    function onBeforeInstallPrompt(event: Event) {
      event.preventDefault();
      if (localStorage.getItem(DISMISSED_KEY)) return;
      setPromptEvent(event as BeforeInstallPromptEvent);
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  }, []);

  if (!promptEvent) return null;

  async function install() {
    if (!promptEvent) return;
    await promptEvent.prompt();
    setPromptEvent(null);
  }

  function dismiss() {
    localStorage.setItem(DISMISSED_KEY, '1');
    setPromptEvent(null);
  }

  return (
    <div className="bg-background fixed inset-x-0 bottom-0 z-50 border-t p-3 shadow-lg">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
        <p className="text-sm">Instala ExamMaster para practicar más rápido.</p>
        <div className="flex shrink-0 gap-2">
          <Button size="sm" onClick={install}>
            Instalar
          </Button>
          <Button size="sm" variant="ghost" onClick={dismiss}>
            Ahora no
          </Button>
        </div>
      </div>
    </div>
  );
}
