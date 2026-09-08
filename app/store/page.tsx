import { CTAButton } from '@/components/cta-button';
import { navigation } from '@/lib/site-config';
import { pageMetadata } from '@/lib/metadata';
import { PlaceholderPage } from '@/components/placeholder-page';
const page = navigation.find(item => item.href === '/store')!;
export const metadata = pageMetadata(page.label, page.description);
export default function Page() { return <PlaceholderPage title={page.label} description={page.description} additionalAction={<CTAButton channel="naverPlace" variant="outline">네이버 지도에서 보기</CTAButton>}/>; }

