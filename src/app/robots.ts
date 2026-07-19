// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Allows all search engines
      allow: '/',
    },
    sitemap: 'https://thelisteningrm.com/sitemap.xml',
  };
}