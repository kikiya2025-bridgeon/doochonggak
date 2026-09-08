'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/lib/site-config';
import { CTAButton } from './cta-button';
import { MobileOrder } from './mobile-order';
export function Logo() { return <Link href="/" className="logo" aria-label="두총각 닭갈비 홈">두총각 <span>닭갈비</span><small>좋은 음식, 좋은 사람, 더 좋은 이야기</small></Link>; }
export function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const toggle = useRef<HTMLButtonElement>(null);
    useEffect(() => { const close = (e: KeyboardEvent) => { if (e.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
    } }; document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close); }, []);
    return <><header className="site-header"><div className="container header-inner"><Logo /><nav className="desktop-nav" aria-label="주 메뉴">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>)}</nav><div className="header-order"><CTAButton channel="smartStore"/></div><button ref={toggle} className="menu-toggle" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div><nav id="mobile-navigation" className="mobile-nav" hidden={!open} aria-label="모바일 주 메뉴">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label}<span>↗</span></Link>)}<CTAButton channel="smartStore"/></nav></header><MobileOrder /></>;
}

