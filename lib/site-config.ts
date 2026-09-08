// Official addresses are intentionally unset. Set these values to enable external links.
export const SMART_STORE_URL = '';
export const YOUTUBE_URL = '';
export const INSTAGRAM_URL = '';
export const NAVER_PLACE_URL = '';
export const KAKAO_URL = '';
export const DAANGN_URL = '';
export const siteConfig = {
    name: '두총각 닭갈비', description: '김해에서 시작된 두총각 닭갈비. 맛있는 음식, 더 즐거운 이야기로 찾아갑니다.',
    url: '',
    links: { smartStore: SMART_STORE_URL, youtube: YOUTUBE_URL, instagram: INSTAGRAM_URL, naverPlace: NAVER_PLACE_URL, kakao: KAKAO_URL, daangn: DAANGN_URL },
    store: { region: '경상남도 김해', address: '', phone: '', hours: '', parking: '' },
    business: { company: '', owner: '', registrationNumber: '' },
};
export type Channel = keyof typeof siteConfig.links;
export const navigation = [
    { href: '/dakgalbi', label: '닭갈비', description: '대표 닭갈비부터 사이드와 세트 메뉴까지, 두총각의 맛을 소개합니다.' },
    { href: '/story', label: '두총각 이야기', description: '음식과 사람, 그리고 김해. 두총각이 만들어가는 이야기를 전합니다.' },
    { href: '/content', label: '콘텐츠', description: '주방 안팎의 즐거운 일상을 YouTube와 Instagram에서 만나보세요.' },
    { href: '/store', label: '매장안내', description: '김해에서 만나는 두총각 닭갈비. 매장 정보와 오시는 길을 준비하고 있습니다.' },
    { href: '/news', label: '소식', description: '두총각의 공지, 이벤트, 미디어 소식을 전하는 공간입니다.' },
];

