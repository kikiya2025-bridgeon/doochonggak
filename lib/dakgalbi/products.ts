import { photos, type Photo } from '@/lib/content';
import { siteConfig } from '@/lib/site-config';

export type DakgalbiProduct = {
  id: string;
  image: Photo;
  name: string;
  description: string;
  composition: string;
  price?: number;
  smartStoreUrl: string;
  isPlaceholder: boolean;
};

// These are layout slots, not verified products. Do not add invented prices,
// weights, servings, ingredients, or manufacturing claims.
// All purchase destinations are resolved from the existing central configuration.
export const products: DakgalbiProduct[] = [
  {
    id: 'signature-01',
    image: photos.hero,
    name: '대표 닭갈비 01',
    description: '첫 번째 대표 메뉴를 소개할 예정입니다.',
    composition: '상품 구성 안내 준비 중',
    smartStoreUrl: siteConfig.links.smartStore,
    isPlaceholder: true,
  },
  {
    id: 'signature-02',
    image: photos.cheese,
    name: '대표 닭갈비 02',
    description: '두 번째 대표 메뉴를 소개할 예정입니다.',
    composition: '상품 구성 안내 준비 중',
    smartStoreUrl: siteConfig.links.smartStore,
    isPlaceholder: true,
  },
  {
    id: 'signature-03',
    image: photos.original,
    name: '대표 닭갈비 03',
    description: '세 번째 대표 메뉴를 소개할 예정입니다.',
    composition: '상품 구성 안내 준비 중',
    smartStoreUrl: siteConfig.links.smartStore,
    isPlaceholder: true,
  },
];
