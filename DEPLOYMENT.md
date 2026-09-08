# Vercel Production 링크 수정 배포 안내

## 조사 결과
현재 URL은 lib/site-config.ts의 externalLinks 코드 상수로 관리합니다.
.env.local, process.env, NEXT_PUBLIC_ 환경변수에 의존하지 않습니다.
CTAButton은 선택한 URL이 비어 있을 때만 준비 안내 버튼을 표시합니다.
이번 소스는 빌드 후 생성된 Production HTML까지 검사하며 4개 채널 모두 실제 링크로 렌더링됩니다.

이전에 전달한 ZIP은 실제 URL 연결 작업 전에 생성되었습니다. 그 소스를 올렸다면 빈 URL과 준비 안내가 배포됩니다.
현재 Vercel 주소나 배포 커밋을 확인하지 못했으므로 실제 배포본의 원인은 확정하지 않았습니다.

## 재배포
1. 이 ZIP을 풀어 GitHub 저장소의 기존 소스를 최신 파일로 교체하고 커밋·push하세요.
2. 반드시 lib/site-config.ts, package.json, scripts/verify-production-links.mjs도 업로드하세요.
3. Vercel의 프로젝트가 위 저장소·브랜치·프로젝트 폴더를 사용하는지 확인하세요.
4. 새 커밋으로 Production 배포를 실행하세요. 기존 커밋의 Redeploy만 하면 예전 소스가 다시 배포될 수 있습니다.
5. Build Command는 npm run build 또는 pnpm run build로 설정하세요. next build만 직접 지정하면 후속 검사가 생략됩니다.
6. 로그에서 다음 문구를 확인하세요:
   Production links verified: 4 official channels, 6 routes, anchor destinations and new-tab attributes.
7. 새 Production 배포 주소를 열어 Header/Hero/상품/중간/마지막/모바일 주문 버튼, 채널 카드 3개, Footer, 지도 버튼을 확인하세요.

외부 URL용 환경변수 추가는 필요하지 않습니다. 카카오·당근만 URL 미확정으로 기존 준비 안내를 유지합니다.
사이트 도메인, 주소, 상품 정보 등 미확정 콘텐츠는 이번 링크 문제와 별개입니다.

## 검증
- next build 및 TypeScript 통과
- 빌드 산출물의 6개 경로 링크 자동 검사 통과
- next start Production 서버의 데스크톱·390px 모바일 링크 확인
- HOME의 확정 채널 fallback 버튼 없음
- Store 지도 링크 확인

이 ZIP에는 소스와 로컬 이미지가 포함되며 node_modules, .next, .git, 환경변수 파일은 제외됩니다.
GitHub에는 ZIP 자체가 아니라 압축을 푼 파일을 올려주세요.
