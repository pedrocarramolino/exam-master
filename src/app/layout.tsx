import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { InstallBanner } from '@/features/pwa/components/install-banner';
import { ServiceWorkerRegistration } from '@/features/pwa/components/service-worker-registration';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'ExamMaster — Simulacros de oposiciones',
    template: '%s | ExamMaster',
  },
  description:
    'Practica exámenes oficiales de oposiciones (Maestro Primaria, Policía Nacional, Guardia Civil, AGE...) desde el móvil, tablet u ordenador.',
  applicationName: 'ExamMaster',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ExamMaster',
  },
  icons: {
    apple: '/icons/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#1d4ed8',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <ServiceWorkerRegistration />
        <InstallBanner />
      </body>
    </html>
  );
}
