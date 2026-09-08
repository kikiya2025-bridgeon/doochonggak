# 두총각 닭갈비 — 1차 홈페이지

Next.js App Router + TypeScript + Tailwind CSS v4. HOME 중심의 1차 구현이며 배포·CMS·상세 페이지 콘텐츠는 이번 범위에 포함하지 않았습니다.

## 실행

Node.js 20.9 이상과 pnpm을 사용합니다.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm start
pnpm typecheck
```

미리보기: http://127.0.0.1:3000

이 환경에서 pnpm 실행 시 저장소 경로 차이로 자동 재설치 오류가 발생하면, 이미 설치된 의존성으로 `node node_modules/next/dist/bin/next dev --hostname 127.0.0.1` 또는 `node node_modules/next/dist/bin/next build`를 실행할 수 있습니다.

## 구현 범위

- 공통 Sticky Header, 현재 메뉴 표시, 모바일 펼침 메뉴, Escape 닫기
- 공통 Footer 및 채널 링크
- HOME: Hero, 4개 브랜드 장점, 채널 허브, 제품, YouTube 3개·Instagram 그리드, 브랜드 이야기, 매장, 마지막 주문 CTA
- 모바일 20px 여백, 1열 카드, 하단 Sticky 주문 CTA, 화면 크기별 음식 이미지 프레임
- `/dakgalbi`: 제품 랜딩페이지. `/story`, `/content`, `/store`, `/news`: 공통 레이아웃과 간단한 준비 안내
- 페이지별 title·description·기본 Open Graph, 본문 건너뛰기, 키보드 포커스

## 변경 파일과 역할

| 파일 | 역할 |
| --- | --- |
| `app/layout.tsx` | 한국어 문서, 기본 SEO, 공통 Header·Footer |
| `app/page.tsx` | HOME 11개 구매 전환 섹션 조합 |
| `app/globals.css` | Tailwind 로딩·테마, 전체 레이아웃, 데스크톱·태블릿·모바일 스타일 |
| `app/dakgalbi/page.tsx` | 닭갈비 Placeholder 및 메타데이터 |
| `app/story/page.tsx` | 두총각 이야기 Placeholder 및 메타데이터 |
| `app/content/page.tsx` | 콘텐츠 Placeholder 및 메타데이터 |
| `app/store/page.tsx` | 매장안내 Placeholder 및 메타데이터 |
| `app/news/page.tsx` | 소식 Placeholder 및 메타데이터 |
| `components/header.tsx` | 로고, 내비게이션, 모바일 메뉴, 하단 CTA |
| `components/footer.tsx` | 브랜드·사업자 정보 영역, 하단 내비게이션, 소셜 채널 |
| `components/cta-button.tsx` | 내부 Link·외부 링크·미확정 URL 안내 버튼 구분 |
| `components/brand-image.tsx` | Next/Image 공통 래퍼, 임시 목업 사진 영역 표시 및 공식 이미지 교체 지원 |
| `components/cards.tsx` | ProductCard·ContentCard |
| `components/section-title.tsx` | 공통 섹션 제목 |
| `components/placeholder-page.tsx` | 미완성 상세 페이지 공통 화면 |
| `lib/site-config.ts` | 모든 구매·소셜 URL, 내비게이션, 매장·사업자 정보 |
| `lib/content.ts` | 교체 가능한 이미지·제품·영상·채널 데이터 |
| `lib/metadata.ts` | 페이지 SEO 함수, 확정 정보용 Restaurant 구조화 데이터 생성 함수 |
| `public/images/design-reference.png` | 제공된 목업 원본의 임시 로컬 사본 |
| `package.json`, `pnpm-lock.yaml` | 의존성·실행 명령과 설치 버전 고정 |
| `next.config.ts`, `next-env.d.ts` | Next.js 설정·타입 참조 |
| `tsconfig.json` | TypeScript strict 및 경로 별칭 |
| `postcss.config.mjs` | Tailwind v4 PostCSS 설정 |
| `.gitignore` | 의존성·빌드·환경변수·로컬 캐시 제외 |
| `AGENTS.md`, `CLAUDE.md` | 설치된 Next.js가 자동 생성한 개발 에이전트 안내 |
| `README.md` | 실행·구조·교체 방법·검증 결과 |

## 실제 자료 교체

### 외부 URL

`lib/site-config.ts`의 `SMART_STORE_URL`, `YOUTUBE_URL`, `INSTAGRAM_URL`, `KAKAO_URL`, `DAANGN_URL`에 공식 URL을 입력합니다. 현재 빈 값이며 임의의 상점/계정으로 이동하지 않습니다. 빈 값일 때 CTA는 “공식 채널 연결을 준비하고 있습니다.”를 표시합니다. 값 입력 후 새 창 링크로 자동 전환됩니다.

### 사진과 콘텐츠

현재 사진은 **공식 사진이 아닙니다**. 제공된 목업 원본을 수정하지 않고 사진 영역만 CSS로 표시합니다. 일부 영역은 원본 해상도가 낮아 확대 시 흐릴 수 있습니다. 임시 제품명·영상 제목도 실제 판매 상품 또는 게시 콘텐츠를 의미하지 않습니다.

1. 공식 사진을 `public/images/`에 추가합니다.
2. `lib/content.ts`에서 해당 사진의 `src`, `alt`를 교체하고 `crop`을 제거합니다.
3. 필요하면 `position: 'center 35%'`처럼 사진별 초점을 지정합니다.
4. 제품·영상·채널 목록을 실제 내용으로 교체합니다. 개별 영상 연결은 실제 영상 URL이 확정된 다음 공통 설정에 추가합니다.

```ts
hero: {
  src: '/images/dakgalbi-hero.webp',
  alt: '공식 두총각 닭갈비 대표 메뉴',
  position: 'center',
}
```

### 사업자·SEO

실제 주소·전화·영업시간·사업자 정보를 `siteConfig`에 입력합니다. 현재 가짜 정보나 지도는 넣지 않았습니다. `siteConfig.url`은 공식 도메인이 확정된 후 설정합니다. `getRestaurantJsonLd()`는 필수 정보가 비어 있으면 null을 반환하며, 현재 페이지에 구조화 데이터를 출력하지 않습니다. 확정된 정보를 검토한 뒤 JSON-LD 출력을 추가하세요.

Pretendard는 버전 고정 CDN CSS로 로드하며, 로드 실패 시 시스템 한글 폰트로 대체합니다. 운영 전 로컬 폰트 제공을 검토하세요.

## 확인 결과와 남은 검증

- Next.js 프로덕션 빌드 및 TypeScript 검사 통과
- HOME과 상세 5개 경로 HTTP 200 확인
- 모든 경로의 title, description, Open Graph title 확인
- 로컬 개발 미리보기 제공
- HOME은 1440px 데스크톱·390px 모바일 브라우저에서 확인. 실기기 터치 테스트는 별도 진행 필요
- 공식 URL 미확정 상태이므로 실제 스마트스토어 구매 전환은 아직 불가능

## 다음 작업 우선순위

1. 공식 스마트스토어·소셜 URL과 로고·고해상도 음식/사람/매장 사진 교체
2. 1440px·768px·390px·320px 및 모바일 가로 화면에서 이미지 크롭·첫 화면 CTA·메뉴·포커스 검수
3. 실제 메뉴명·상품 구성·콘텐츠 제목과 사업자·매장 정보 확정
4. 상세 페이지를 하나씩 구현하고 콘텐츠별 실제 이동 링크 연결
5. 공식 도메인·공유 이미지·Restaurant JSON-LD 확정 및 주문 CTA 클릭 분석 추가


## HOME 구매 전환 개편

HOME은 Hero → 상품 안내 4개 → 대표 상품 3개 → 구매 CTA → 차별점 → 실제 후기 준비 영역 → 조리 4단계 → 콘텐츠 → 브랜드 이야기 → 매장 → 마지막 구매 CTA의 11개 섹션으로 구성합니다.

- `app/page.tsx`: 구매 우선 섹션 순서와 CTA, Hero·마지막 슬로건 수정
- `app/home.module.css` (신규): 기존 Global CSS를 보존하는 HOME 전용 반응형 스타일
- `lib/home-content.ts` (신규): 상품·특징·리뷰 데이터 재사용, 교체 가능한 신뢰 포인트·조리 단계
- `components/mobile-order.tsx` (신규): Footer 접근 시 고정 주문 버튼을 숨기고 되돌아오면 다시 표시
- `components/header.tsx`: 주문 문구 통일 및 모바일 주문 컴포넌트 연결
- `lib/site-config.ts`: 문의 내비게이션 제거. Header와 Footer는 동일 데이터를 사용하므로 함께 반영
- 문의 페이지 파일 삭제. 공유 Placeholder 컴포넌트는 다른 경로에서 사용하므로 유지

빌드와 TypeScript 검사를 통과했습니다. 유지한 6개 경로는 HTTP 200, 삭제한 문의 경로는 HTTP 404이며 앱 소스에 문의 링크가 없습니다. 1440px·390px 브라우저에서 첫 화면 CTA, 모바일 제품 1열, 가로 넘침 없음, 주문 안내 동작, Footer 접근 시 Sticky CTA 숨김을 확인했습니다. 나머지 상세 페이지와 데이터는 파일 해시 비교로 변경되지 않았음을 확인했습니다.

실제 교체 대상: 공식 상품명·구성·가격·사진, 검증된 원재료·맛·제조·배송 정보, 실제 고객 후기, 제품별 조리법과 공식 스마트스토어 URL. 현재 빈 URL은 준비 안내를 표시합니다. 실기기의 안전 영역·브라우저 주소창 변화·터치 조작 및 공식 URL 입력 후 구매 이동은 운영 전 최종 검수가 필요합니다.
