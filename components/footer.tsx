import Link from 'next/link';
import { navigation, siteConfig, type Channel } from '@/lib/site-config';
import { Logo } from './header';
import { CTAButton } from './cta-button';
export function Footer() { return <footer className="site-footer"><div className="container"><div className="footer-top"><div><Logo /><p>맛있는 음식이 만드는 더 좋은 일상.</p><div className="business-info">{siteConfig.business.company || '두총각 닭갈비'} · {siteConfig.store.region}<br />사업자 정보 및 상세 매장 정보는 준비 중입니다.</div></div><nav aria-label="하단 메뉴">{navigation.map(i => <Link href={i.href} key={i.href}>{i.label}</Link>)}</nav><div className="footer-social">{([['youtube', 'YouTube'], ['instagram', 'Instagram'], ['smartStore', 'Naver Smart Store'], ['kakao', 'Kakao'], ['daangn', '당근']] as [
    Channel,
    string
][]).map(([channel, label]) => <CTAButton key={channel} channel={channel} variant="text">{label}</CTAButton>)}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} 두총각 닭갈비. All rights reserved.</span><span>좋은 맛은 좋은 사람들을 만듭니다.</span></div></div></footer>; }
