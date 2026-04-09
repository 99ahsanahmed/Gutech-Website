import type { MetadataRoute } from 'next';

import { navigation } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gutech.edu.pk';
  const routes = [
    ...navigation.primary.map((item) => item.href),
    ...navigation.programLinks.map((item) => item.href),
    ...navigation.departmentLinks.map((item) => item.href),
  ];

  return Array.from(new Set(routes)).map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
