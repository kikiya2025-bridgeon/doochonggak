import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/site-config';
import './globals.css';
export const metadata: Metadata = { title: { default: '두총각 닭갈비 | 좋은 음식, 더 즐거운 이야기', template: '%s | 두총각 닭갈비' }, description: siteConfig.description, openGraph: { title: '두총각 닭갈비', description: siteConfig.description, locale: 'ko_KR', type: 'website', siteName: siteConfig.name }, ...(siteConfig.url ? { metadataBase: new URL(siteConfig.url) } : {}) };
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) { return <html lang="ko"><body><a className="skip-link" href="#main">본문 바로가기</a><Header />{children}<Footer /></body></html>; }
