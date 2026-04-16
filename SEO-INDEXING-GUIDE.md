# 페이지 색인 진단 및 가속 가이드 (oktools.co.kr)

## 배경

대규모 분석 결과, 사이트의 기술적 SEO(canonical, sitemap, robots, JSON-LD, SSR)는
이미 정상입니다. 색인 지연의 실제 원인은 다음 3가지입니다.

1. **Thin Content** — 일부 도구 페이지의 본문이 부족
2. **신생 도메인 + 도메인 오토리티 부족** — 백링크가 적어 크롤 예산 제한
3. **GSC에서 색인 요청이 직접 트리거되지 않음** — sitemap만 등록된 상태

Stage 1·2에서 #1과 #3을 부분 해결했고, 이 문서는 **남은 수동 작업**을 안내합니다.

---

## ✅ Stage 1·2 자동 완료 항목 (이미 코드에 반영됨)

| 항목 | 위치 | 효과 |
| --- | --- | --- |
| Thin 페이지 4개 본문 보강 | `src/app/tools/clock`, `tools/lotto`, `tools/random-number`, `life/percentage` | 단어 수 350 → 1,200+ 증가, FAQ·H2/H3 확장 |
| `life/percentage` UTF-8 깨짐 수정 | 동 파일 metadata | 검색 결과 제목·설명 정상 표기 |
| IndexNow 키 파일 | `public/49c45be40196fb052620bdac086efb00.txt` | Bing/Naver/Yandex 즉시 핑 가능 |
| IndexNow API 라우트 | `src/app/api/indexnow/route.ts` | 토큰 보호된 GET/POST 핑 엔드포인트 |
| IndexNow 빌드 스크립트 | `scripts/ping-indexnow.mjs` | `npm run indexnow`로 즉시 일괄 핑 |

---

## 🔴 [필수] Stage 3 — 사용자가 직접 실행해야 하는 작업

### 1) Google Search Console — sitemap 재제출 + 색인 요청 (가장 중요)

#### 1-A. sitemap 등록 상태 확인

1. [Google Search Console](https://search.google.com/search-console) 접속 → `oktools.co.kr` 속성 선택
2. 좌측 메뉴 **「Sitemaps」** 클릭
3. 다음 URL이 「성공」 상태인지 확인:
   ```
   https://www.oktools.co.kr/sitemap.xml
   ```
4. 등록 안 되어 있거나 「가져오지 못했습니다」 상태라면, 입력란에 `sitemap.xml` 입력 후 **「제출」** 클릭
5. 「발견된 URL」 수가 **70개**인지 확인 (도구 60 + 카테고리 7 + 정적 4 = 71, ±1 허용)

#### 1-B. 색인 안 된 페이지 진단 (5개만 샘플링)

다음 페이지를 GSC 「URL 검사」에 하나씩 입력:

```
https://www.oktools.co.kr/tools/clock
https://www.oktools.co.kr/finance/loan-calculator
https://www.oktools.co.kr/health/bmi
https://www.oktools.co.kr/fortune/tarot
https://www.oktools.co.kr/tools/youtube-tracklist
```

각각의 「URL 검사」 결과에서 **다음 메시지를 확인**하고 분류하세요:

| 메시지 | 진짜 원인 | 다음 행동 |
| --- | --- | --- |
| **「URL이 Google에 등록되어 있지 않음」 → 크롤링됨, 현재 색인되지 않음 (Crawled - currently not indexed)** | 콘텐츠 품질·중복 | 본문 보강 + 시간 (4~12주) |
| **「URL이 Google에 등록되어 있지 않음」 → 발견됨, 현재 색인되지 않음 (Discovered - currently not indexed)** | 크롤 예산 부족 | 색인 요청·내부 링크 강화 필요 |
| **「URL이 Google에 등록되어 있지 않음」 → 대체 페이지(올바른 표준 태그 있음)** | canonical이 다른 페이지 가리킴 | canonical 코드 점검 필요 |
| **「Soft 404」** | 콘텐츠 없음 또는 빈 페이지 | 콘텐츠 보강 필수 |
| **「URL이 Google에 등록되어 있음」** | 정상 | 다른 페이지 점검 |

각 페이지에서 **「색인 생성 요청」** 버튼을 클릭 (1일 약 10개 한도).

#### 1-C. 색인 커버리지 보고서 확인

1. 좌측 메뉴 **「색인 → 페이지」** 클릭
2. 「제출되었으나 색인이 등록되지 않음」 항목 클릭
3. 표시된 페이지 목록을 **CSV로 다운로드**
4. 각 페이지의 「유형」 컬럼 사유별로 그룹핑하여 우선 대응

---

### 2) Naver 서치어드바이저 등록

1. [네이버 서치어드바이저](https://searchadvisor.naver.com) 접속
2. 「사이트 관리 → oktools.co.kr → 요청 → 사이트맵 제출」
3. `sitemap.xml` 입력 → 제출
4. 「요청 → 웹페이지 수집」에서 색인 원하는 URL을 개별 등록 (1일 한도 있음)
5. 네이버는 IndexNow를 지원하므로 Stage 2에서 만든 핑이 자동 도달함

---

### 3) Bing 웹마스터 도구 등록

1. [Bing Webmaster Tools](https://www.bing.com/webmasters) 접속
2. 「Import from Google Search Console」로 GSC 인증을 그대로 가져오기
3. 사이트맵 `sitemap.xml` 자동 등록 확인
4. 「URL Inspection」으로 주요 페이지 색인 요청
5. Bing이 IndexNow를 만들었으므로 Stage 2 핑이 가장 빠르게 반영됨

---

### 4) IndexNow 즉시 핑 실행

#### 4-A. 한 번 일괄 핑 (수동, 가장 간단)

배포 후 또는 sitemap 변경 후:

```bash
npm run indexnow
```

성공 시 다음과 같이 출력됩니다:
```
[indexnow] 71 URLs prepared (2026-04-16)
[indexnow] OK (200) — 71 URLs submitted
```

#### 4-B. 운영 환경에서 API로 핑 (배포 자동화용)

배포 환경변수에 토큰 설정:
```bash
INDEXNOW_TOKEN=<32자 이상 임의 비밀 문자열>
```

배포 후 외부에서 호출:
```bash
# 사이트맵 전체 일괄 핑
curl "https://www.oktools.co.kr/api/indexnow?token=$INDEXNOW_TOKEN"

# 특정 URL만 핑 (콘텐츠 업데이트 시)
curl -X POST https://www.oktools.co.kr/api/indexnow \
  -H "Content-Type: application/json" \
  -d "{\"urls\":[\"https://www.oktools.co.kr/tools/clock\"],\"token\":\"$INDEXNOW_TOKEN\"}"
```

#### 4-C. GitHub Actions로 자동화 (선택)

`.github/workflows/indexnow.yml` 생성:
```yaml
name: IndexNow Ping
on:
  push:
    branches: [main]
    paths:
      - 'src/app/sitemap.ts'
      - 'src/app/**/page.tsx'
jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: node scripts/ping-indexnow.mjs
```

---

## 📈 효과 모니터링

### 측정 지표 (GSC「색인 → 페이지」)

| 지표 | 현재(추정) | 1개월 후 목표 | 3개월 후 목표 |
| --- | --- | --- | --- |
| 색인된 페이지 | < 20 | 40+ | 65+ |
| 「Crawled - not indexed」 | 30+ | < 15 | < 5 |
| 「Discovered - not indexed」 | 20+ | < 10 | < 3 |

### 주간 점검 체크리스트

- [ ] GSC「실적」 → 노출수·클릭수 추이 확인
- [ ] GSC「색인 → 페이지」 → 신규 색인된 페이지 확인
- [ ] GSC「URL 검사」 → 우선순위 5개 페이지 색인 상태 재점검
- [ ] Bing Webmaster Tools「Site Explorer」 → IndexNow 반영 확인

---

## 🚧 장기 과제 (Stage 4 이후)

| 우선순위 | 작업 | 예상 효과 |
| --- | --- | --- |
| 높음 | 카테고리 본문(예: `/finance/page.tsx`) 차별화 — 각 카테고리에 1,500자 이상의 카테고리 가이드 본문 추가 | 카테고리 페이지 색인 + 내부 링크 가중치 상승 |
| 높음 | 도구 간 중복 해소 — 비슷한 finance 도구(salary/dsr/pension/year-end-tax)에 each 1,000자 이상의 차별화된 사례·가이드 추가 | 「소프트 404」「duplicate」 사유 감소 |
| 중간 | 외부 백링크 확보 — 한국 IT/금융 블로그·커뮤니티에 도구 소개, 위키백과 외부 링크 | 도메인 오토리티 상승, 크롤 예산 확대 |
| 중간 | 도구별 사용 사례 블로그 글 5~10편 (`/blog/` 신설) | 롱테일 키워드 확장 |
| 낮음 | 카테고리별 OG 이미지 동적 생성 (`opengraph-image.tsx`를 카테고리 폴더로 분산) | 소셜 공유 CTR 상승 |

---

## ❓ 자주 묻는 질문

**Q. IndexNow를 호출하면 Google에도 색인되나요?**
A. Google은 IndexNow를 공식 지원하지 않습니다 (2026년 4월 기준). Bing·Naver·Yandex·Seznam·Yep만 즉시 반영됩니다. Google은 sitemap.xml + GSC URL 검사로 별도 요청해야 합니다.

**Q. 색인까지 얼마나 걸리나요?**
A. Bing/Naver는 IndexNow 핑 후 보통 **24~72시간** 내 색인. Google은 신생 도메인 기준 평균 **2~8주**, 콘텐츠 품질·내부 링크에 따라 더 길어질 수 있습니다.

**Q. 「Crawled - currently not indexed」를 빨리 해결하려면?**
A. 본문 보강(Stage 1에서 일부 진행)과 함께 **외부 백링크**가 가장 효과적입니다. 한국 IT 블로그·커뮤니티 1~2곳에 자연스러운 도구 소개를 시도해보세요.

**Q. IndexNow 키를 변경하려면?**
A. `public/49c45be40196fb052620bdac086efb00.txt`, `src/lib/indexnow.ts`, `scripts/ping-indexnow.mjs`의 32자 키를 동시에 교체하세요. 키 노출 우려는 낮습니다 (인증보다는 「소유권 증명」 용도).
