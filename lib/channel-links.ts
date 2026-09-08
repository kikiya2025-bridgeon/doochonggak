import { Instagram, MapPin, Youtube, type LucideIcon } from 'lucide-react';
import { photos, type Photo } from '@/lib/content';
import type { Channel } from '@/lib/site-config';

export type ChannelLink = {
  name: string;
  title: string;
  description: string;
  channel: Channel;
  icon: LucideIcon;
  image: Photo;
  cta: string;
};

// The channel key resolves its URL through siteConfig in the shared CTAButton.
// Add future Kakao/Daangn entries here without changing the rendering component.
export const channelLinks: ChannelLink[] = [
  {
    name: 'YouTube',
    title: '유튜브에서 더 많은 이야기',
    description: '두총각의 음식, 사람, 김해의 일상과 다양한 콘텐츠를 만나보세요.',
    channel: 'youtube',
    icon: Youtube,
    image: photos.food,
    cta: '유튜브 바로가기',
  },
  {
    name: 'Instagram',
    title: '인스타그램에서 실시간 소식',
    description: '오늘의 두총각, 매장 이야기와 맛있는 순간을 확인해보세요.',
    channel: 'instagram',
    icon: Instagram,
    image: photos.people,
    cta: '인스타그램 바로가기',
  },
  {
    name: 'Naver Place',
    title: '네이버 플레이스에서 두총각 만나기',
    description: '매장 정보와 두총각 관련 정보를 네이버 플레이스에서 확인해보세요.',
    channel: 'naverPlace',
    icon: MapPin,
    image: photos.store,
    cta: '네이버 플레이스 바로가기',
  },
];

