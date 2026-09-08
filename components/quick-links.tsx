import { BrandImage } from '@/components/brand-image';
import { CTAButton } from '@/components/cta-button';
import { channelLinks } from '@/lib/channel-links';
import styles from './quick-links.module.css';

export function QuickLinks() {
  return (
    <section className={styles.section} aria-labelledby="quick-links-title">
      <div className="container">
        <div className={styles.heading}>
          <h2 id="quick-links-title">지금, 두총각을 더 만나보세요.</h2>
          <p>맛있는 이야기와 새로운 소식을<br />각 채널에서 확인해보세요.</p>
        </div>
        <div className={styles.grid}>
          {channelLinks.map(link => {
            const Icon = link.icon;
            return (
              <article key={link.channel} className={styles.card}>
                <div className={styles.image}><BrandImage photo={link.image} /></div>
                <div className={styles.body}>
                  <span className={styles.channel}><Icon size={20} strokeWidth={1.6} aria-hidden="true" />{link.name}</span>
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                  <div className={styles.action}><CTAButton channel={link.channel} variant="outline" className={styles.button}>{link.cta}</CTAButton></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
