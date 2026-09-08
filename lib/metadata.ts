import type { Metadata } from 'next';
import { siteConfig } from './site-config';
export function pageMetadata(title: string, description: string): Metadata { return { title, description, openGraph: { title: `${title} | ${siteConfig.name}`, description, locale: 'ko_KR', type: 'website', siteName: siteConfig.name } }; }
// Render only once verified store and business information is available.
export function getRestaurantJsonLd() { if (!siteConfig.store.address || !siteConfig.store.phone || !siteConfig.url)
    return null; return { '@context': 'https://schema.org', '@type': 'Restaurant', name: siteConfig.name, url: siteConfig.url, address: siteConfig.store.address, telephone: siteConfig.store.phone, servesCuisine: '한식' }; }
