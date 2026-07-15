import type { MetadataRoute } from 'next';

import { DataConnectContentRepository } from '@/infrastructure/firebase/content-repository';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://exam-master-red.vercel.app';

const contentRepository = new DataConnectContentRepository();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/simulador`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/login`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/registro`, changeFrequency: 'yearly', priority: 0.5 },
  ];

  // El catálogo público (oposiciones) también es indexable.
  try {
    const categories = await contentRepository.listCategories();
    const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
      url: `${SITE_URL}/simulador/categorias/${category.id}`,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
    return [...staticEntries, ...categoryEntries];
  } catch {
    // Si la BD no responde durante el build, el sitemap estático sigue siendo válido.
    return staticEntries;
  }
}
