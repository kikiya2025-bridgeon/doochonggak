import { navigation } from '@/lib/site-config';
import { pageMetadata } from '@/lib/metadata';
import { PlaceholderPage } from '@/components/placeholder-page';
const page = navigation.find(item => item.href === '/story')!;
export const metadata = pageMetadata(page.label, page.description);
export default function Page() { return <PlaceholderPage title={page.label} description={page.description}/>; }
