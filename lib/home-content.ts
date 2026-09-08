import { products } from '@/lib/dakgalbi/products';
import { features, reviews, reviewState } from '@/lib/dakgalbi/content';

// Reuse the verified/placeholder state of the product page instead of inventing
// a second product catalog or customer reviews for HOME.
export const homeProducts = products;
export const homeFeatures = features;
export const homeReviews = reviews;
export const homeReviewState = reviewState;

// Replace these editorial placeholders only after the corresponding facts are confirmed.
export const trustPoints = [
  { id: 'ingredients', title: '재료 이야기', text: '원재료 안내 준비 중', isPlaceholder: true },
  { id: 'taste', title: '두총각의 맛', text: '맛 소개 준비 중', isPlaceholder: true },
  { id: 'cooking', title: '즐기는 방법', text: '제품별 조리법 안내 예정', isPlaceholder: true },
  { id: 'delivery', title: '우리 집 식탁으로', text: '배송 안내 준비 중', isPlaceholder: true },
];

export const enjoySteps = [
  { number: '01', title: '팬에 닭갈비 넣기', description: '제품 표시사항을 확인하고 팬을 준비해 주세요.' },
  { number: '02', title: '맛있게 볶기', description: '제품 조리 안내에 따라 속까지 충분히 익혀 주세요.' },
  { number: '03', title: '야채 / 치즈 / 사리 추가', description: '취향에 맞는 재료로 나만의 한 판을 즐겨보세요.' },
  { number: '04', title: '마지막 볶음밥', description: '밥을 더해 마지막 한 숟가락까지 맛있게.' },
];
