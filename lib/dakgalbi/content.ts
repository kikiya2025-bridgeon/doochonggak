import { photos, type Photo } from '@/lib/content';

// Editorial placeholders: these headings describe future content, not product claims.
export const features = [
  { id: 'ingredients', title: '한 판을 채우는 재료', description: '원재료 정보를 확인한 뒤, 재료에 담긴 이야기를 전해드릴게요.', isPlaceholder: true },
  { id: 'flavor', title: '두총각의 맛 이야기', description: '양념과 맛에 대한 정확한 소개를 준비하고 있습니다.', isPlaceholder: true },
  { id: 'making', title: '만드는 과정의 이야기', description: '확인된 제조 과정과 조리 특징을 안내할 예정입니다.', isPlaceholder: true },
  { id: 'table', title: '우리 집 식탁까지', description: '포장과 보관, 배송 안내를 정리해 전해드릴게요.', isPlaceholder: true },
];

// General serving ideas only. Replace with the verified product's cooking instructions.
export const cookingSteps = [
  { number: '01', title: '팬 준비', description: '제품에 표시된 조리 안내를 먼저 확인하고, 재료를 담을 팬을 준비해 주세요.' },
  { number: '02', title: '닭갈비 볶기', description: '제품의 조리 안내에 따라 골고루 볶아 속까지 충분히 익혀 주세요.' },
  { number: '03', title: '채소 또는 사리 추가', description: '취향에 맞는 채소나 사리를 더해 함께 즐겨보세요.' },
  { number: '04', title: '마지막 볶음밥', description: '식사 끝에는 밥을 더해 볶음밥으로 마무리해 보세요.' },
];

export type RecipeIdea = {
  id: string;
  name: string;
  description: string;
  image: Photo | null;
  isPlaceholder: boolean;
};
// No invented recipe links or unrelated food photos. Add verified recipe images later.
export const recipes: RecipeIdea[] = [
  { id: 'fried-rice', name: '닭갈비 볶음밥', description: '마지막 한 숟가락까지 즐기는 방법', image: null, isPlaceholder: true },
  { id: 'rice-bowl', name: '닭갈비 덮밥', description: '따뜻한 밥 위에 올리는 맛있는 한 끼', image: null, isPlaceholder: true },
  { id: 'cheese', name: '치즈 닭갈비', description: '고소한 치즈를 더하는 즐거움', image: photos.hero, isPlaceholder: true },
  { id: 'udon', name: '닭갈비 우동', description: '우동 사리로 더 풍성해지는 한 접시', image: null, isPlaceholder: true },
];

export const reviewState = {
  isPlaceholder: true,
  message: '실제 구매 고객의 후기를 준비하고 있습니다.',
};
export type CustomerReview = { id: string; text: string; author: string };
// Intentionally empty: never render fabricated quotes, star ratings, or counts.
export const reviews: CustomerReview[] = [];
