# GitHub / Vercel 업로드 안내

현재 두총각 닭갈비 홈페이지의 Next.js + TypeScript + Tailwind CSS 소스입니다.
이 ZIP은 소스 전달용이며 GitHub 업로드나 Vercel 배포는 아직 실행하지 않았습니다.

## GitHub
1. ZIP을 압축 해제합니다.
2. 새 GitHub 저장소를 만들고 압축 해제된 파일을 업로드하거나 Git으로 push합니다.
3. package.json과 app 폴더가 저장소 최상위에 위치하도록 합니다.
4. 숨김 파일인 .gitignore도 포함합니다. ZIP 자체를 올리는 대신 압축을 푼 소스를 올려주세요.

## Vercel
1. Vercel에서 새 프로젝트를 만들고 해당 GitHub 저장소를 연결합니다.
2. Framework Preset은 Next.js, Root Directory는 package.json이 있는 폴더를 선택합니다.
3. Install Command는 pnpm install --frozen-lockfile, Build Command는 pnpm build를 사용합니다.
4. Output Directory는 Next.js 자동 설정을 유지합니다.
5. 배포 후 HOME 및 /dakgalbi, /story, /content, /store, /news를 확인합니다.

## 로컬 실행
Node.js와 pnpm이 설치된 환경에서:

pnpm install --frozen-lockfile
pnpm dev

프로덕션 빌드 확인:

pnpm build

## 실제 자료 교체
- lib/site-config.ts: 스마트스토어, YouTube, Instagram, 네이버 플레이스 등 공식 URL
- lib/channel-links.ts: HOME 바로가기 카드 데이터
- lib/dakgalbi/products.ts: 제품명, 구성, 가격, 이미지
- lib/dakgalbi/content.ts: 특징, 조리법, 레시피, 리뷰
- lib/content.ts 및 public/images/: 현재 임시 목업 이미지와 공통 콘텐츠

현재 공식 외부 URL은 비어 있어 클릭 시 준비 안내를 표시합니다.
사진과 상품·리뷰 정보는 공식 자료로 교체할 예정인 상태입니다.

## 포함 / 제외
포함: 앱 소스, 설정 파일, 의존성 잠금 파일, 이미지, 프로젝트 안내.
제외: node_modules, .next, .pnpm-store, .git, 환경변수 파일, 로컬 캐시.