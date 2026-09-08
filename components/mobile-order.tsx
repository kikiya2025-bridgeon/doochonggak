'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CTAButton } from './cta-button';

export function MobileOrder() {
  const [footerVisible, setFooterVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;
    // Hide before the footer meets the fixed bar, including the bottom safe area.
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: '0px 0px 100px 0px', threshold: 0 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  return <div className="mobile-order" style={footerVisible ? { display: 'none' } : undefined}>
    <CTAButton channel="smartStore" />
  </div>;
}
