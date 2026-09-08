import { CTAButton } from './cta-button';
export function PlaceholderPage({ title, description, additionalAction }: {
    title: string;
    description: string;
    additionalAction?: React.ReactNode;
}) { return <main id="main" className="placeholder-page container"><span className="eyebrow">DUCHONGGAK DAKGALBI</span><h1>{title}</h1><p>{description}</p><div className="placeholder-note">조금 더 맛있는 이야기를 준비하고 있습니다.<br />곧 이곳에서 만나보세요.</div><div className="placeholder-actions"><CTAButton href="/" variant="outline">홈으로 돌아가기</CTAButton><CTAButton channel="smartStore"/>{additionalAction}</div></main>; }

