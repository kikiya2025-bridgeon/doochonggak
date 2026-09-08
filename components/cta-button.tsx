'use client';
import Link from 'next/link';
import { useId, useState } from 'react';
import { ArrowUpRight, ShoppingCart, X } from 'lucide-react';
import { siteConfig, type Channel } from '@/lib/site-config';
export function CTAButton({ children = '스마트스토어에서 주문하기', channel, href, variant = 'primary', className = '' }: {
    children?: React.ReactNode;
    channel?: Channel;
    href?: string;
    variant?: 'primary' | 'outline' | 'text';
    className?: string;
}) {
    const [notice, setNotice] = useState(false);
    const id = useId();
    const url = channel ? siteConfig.links[channel] : href;
    const classes = `cta cta-${variant} ${className}`;
    const inner = <>{(channel === 'smartStore') && <ShoppingCart size={18} aria-hidden="true"/>}<span>{children}</span><ArrowUpRight size={17} aria-hidden="true"/></>;
    if (url)
        return channel ? <a className={classes} href={url} target="_blank" rel="noopener noreferrer">{inner}<span className="sr-only"> (새 창)</span></a> : <Link className={classes} href={url}>{inner}</Link>;
    return <span className="cta-wrap"><button className={classes} type="button" aria-expanded={notice} aria-controls={id} onClick={() => setNotice(!notice)}>{inner}</button>{notice && <span className="link-notice" id={id} role="status">공식 채널 연결을 준비하고 있습니다.<button type="button" aria-label="안내 닫기" onClick={() => setNotice(false)}><X size={16}/></button></span>}</span>;
}
