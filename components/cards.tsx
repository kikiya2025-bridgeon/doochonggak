import { Play } from 'lucide-react';
import { BrandImage } from './brand-image';
import { CTAButton } from './cta-button';
import type { Photo } from '@/lib/content';
export function ProductCard({ product }: { product: { title: string; description: string; label: string; photo: Photo } }) {
  return (
    <article className="min-w-0">
      <BrandImage photo={product.photo} />
      <span className="eyebrow">{product.label}</span>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </article>
  );
}
export function ContentCard({ content }: { content: { title: string; category: string; photo: Photo } }) {
  return (
    <article className="min-w-0">
      <div className="video-photo">
        <BrandImage photo={content.photo} />
        <span className="play-badge" aria-hidden="true"><Play size={21} fill="currentColor" /></span>
      </div>
      <span className="video-category">{content.category}</span>
      <h3>{content.title}</h3>
      <CTAButton channel="youtube" variant="text">이야기 만나보기</CTAButton>
    </article>
  );
}
