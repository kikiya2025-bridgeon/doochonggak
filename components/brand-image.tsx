import Image from 'next/image';
import type { Photo } from '@/lib/content';
export function BrandImage({ photo, className = '', priority = false }: {
    photo: Photo;
    className?: string;
    priority?: boolean;
}) {
    const crop = photo.crop;
    return <div className={`brand-image ${className}`}>
    {crop ? <div className="reference-window" style={{ height: 'auto', minHeight: 0, top: '50%', aspectRatio: `${crop[2]}/${crop[3]}`, width: `max(100cqw, ${crop[2] / crop[3] * 100}cqh)` }}><Image src={photo.src} alt={photo.alt} width={1024} height={1536} priority={priority} sizes="(max-width: 700px) 100vw, 1280px" style={{ width: `${1024 / crop[2] * 100}%`, maxWidth: 'none', height: 'auto', left: `${-crop[0] / crop[2] * 100}%`, top: `${-crop[1] / crop[3] * 100}%` }}/></div> : <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes="(max-width: 700px) 100vw, 60vw" style={{ objectFit: 'cover', objectPosition: photo.position || 'center' }}/>}
  </div>;
}
