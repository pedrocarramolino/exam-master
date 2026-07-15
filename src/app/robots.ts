import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://exam-master-red.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Zonas privadas o sin valor para buscadores.
      disallow: ['/admin', '/perfil', '/estadisticas', '/simulador/intentos', '/api'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
