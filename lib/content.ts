export type Photo = {
    src: string;
    alt: string;
    crop?: [
        number,
        number,
        number,
        number
    ];
    position?: string;
};
// Temporary reference-image windows (1024 × 1536). Replace src with official assets and remove crop.
const reference = '/images/design-reference.png';
export const photos = {
    hero: { src: reference, alt: '치즈와 매콤한 닭갈비를 들어 올린 팬 요리 — 임시 목업 이미지', crop: [315, 66, 468, 340] },
    food: { src: reference, alt: '매콤하게 볶아낸 닭갈비 — 임시 목업 이미지', crop: [21, 539, 177, 105] },
    people: { src: reference, alt: '나란히 웃는 두 요리사 — 임시 목업 이미지', crop: [214, 539, 178, 105] },
    package: { src: reference, alt: '닭갈비 밀키트 패키지 — 임시 목업 이미지', crop: [406, 539, 177, 105] },
    story: { src: reference, alt: '주방에서 일하는 사람의 뒷모습 — 임시 목업 이미지', crop: [599, 539, 176, 105] },
    cheese: { src: reference, alt: '치즈를 곁들인 닭갈비 — 임시 목업 이미지', crop: [609, 903, 65, 66] },
    original: { src: reference, alt: '팬에 담긴 닭갈비 — 임시 목업 이미지', crop: [532, 903, 65, 66] },
    set: { src: reference, alt: '풍성한 닭갈비 한 상 — 임시 목업 이미지', crop: [685, 903, 65, 66] },
    store: { src: reference, alt: '따뜻한 조명의 닭갈비 매장 — 임시 목업 이미지', crop: [390, 1437, 106, 72] },
} satisfies Record<string, Photo>;
export const products = [
    { title: '두총각 닭갈비', description: '자꾸 생각나는, 두총각의 대표 한 판', photo: photos.original, label: 'SIGNATURE' },
    { title: '치즈 닭갈비', description: '매콤함 위에 더한 고소한 즐거움', photo: photos.cheese, label: 'CHEESE' },
    { title: '함께 먹는 닭갈비', description: '좋아하는 사람들과 더 푸짐하게', photo: photos.set, label: 'TOGETHER' },
];
export const videos = [
    { title: '맛있는 한 판이 만들어지는 시간', category: '두총각의 주방', photo: photos.food },
    { title: '맛있는 음식 뒤에는, 우리가 있습니다', category: '두총각의 사람들', photo: photos.people },
    { title: '오늘도 주방에서 이야기는 계속됩니다', category: '두총각의 일상', photo: photos.story },
];

export const channels = [{ name: 'YouTube', title: '맛있는 이야기, 한 편', description: '요리와 사람, 김해의 즐거운 일상', photo: photos.food, channel: 'youtube', cta: 'YouTube 보러가기' }, { name: 'Instagram', title: '두총각의 오늘', description: '가장 가까이에서 만나는 우리의 순간', photo: photos.people, channel: 'instagram', cta: 'Instagram 보러가기' }, { name: 'Smart Store', title: '집에서도 두총각 닭갈비', description: '함께 먹고 싶은 맛을 우리 집 식탁으로', photo: photos.package, channel: 'smartStore', cta: '스마트스토어 주문하기' }, { name: 'Our Story', title: '좋은 맛 뒤의 좋은 사람들', description: '음식과 사람을 잇는 두총각의 이야기', photo: photos.story, href: '/story', cta: '두총각 이야기 보기' }];
