import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { InstallBanner } from '@/features/pwa/components/install-banner';
import { ServiceWorkerRegistration } from '@/features/pwa/components/service-worker-registration';
import { ThemeProvider } from '@/shared/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://exam-master-red.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ExamMaster — Simulacros de oposiciones',
    template: '%s | ExamMaster',
  },
  description:
    'Practica exámenes oficiales de oposiciones (Maestro Primaria, Policía Nacional, Guardia Civil, AGE...) desde el móvil, tablet u ordenador.',
  applicationName: 'ExamMaster',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'ExamMaster',
    title: 'ExamMaster — Simulacros de oposiciones',
    description: 'Practica exámenes oficiales de oposiciones desde el móvil, tablet u ordenador.',
    images: [{ url: '/icons/icon-512.png', width: 512, height: 512 }],
  },
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1d4ed8' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: next-themes muta la clase de <html> antes de hidratar.
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          {children}
          <ServiceWorkerRegistration />
          <InstallBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
