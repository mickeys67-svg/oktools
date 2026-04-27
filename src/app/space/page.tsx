import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory, getCategoryById } from "@/data/tools";

export const metadata: Metadata = {
  title: "우주 계산기 - 행성 무게, 우주 거리, 빛 여행 시간",
  description:
    "무료 우주 계산기 모음. 행성 무게, 행성 나이, 우주 거리 변환, 빛 여행 시간 등 재미있는 우주과학 도구를 체험하세요.",
  keywords: ["우주계산기", "행성무게", "우주거리", "광년계산", "행성나이", "빛여행시간", "태양계", "우주과학"],
  openGraph: {
    url: "/space",
    title: "우주 계산기 - 행성 무게, 우주 거리, 빛 여행 시간",
    description:
      "무료 우주 계산기 모음. 행성 무게, 행성 나이, 우주 거리 변환, 빛 여행 시간 등 재미있는 우주과학 도구를 체험하세요.",
  },
  alternates: {
    canonical: "/space",
  },
};

export default function SpacePage() {
  const category = getCategoryById("space")!;
  const tools = getToolsByCategory("space");

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">{category.name}</span>
      </nav>

      <div className="mb-8">
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: category.colorHex }}
        >
          <span className="text-xl">🚀</span>
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          {category.name}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
      </div>

      <section className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <p>다른 행성에서의 내 몸무게와 나이를 계산하고, 광년/천문단위/파섹 등 우주 거리를 변환하며, 빛이나 비행기로 우주를 여행하면 얼마나 걸리는지 확인해 보세요. 태양계와 우주에 대한 호기심을 재미있는 계산으로 풀어보는 과학 도구 모음입니다.</p>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-100 bg-white p-5 text-sm leading-7 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
        <h2 className="mb-3 text-base font-bold text-gray-900 dark:text-gray-100">우주 계산기로 무엇을 알 수 있나요?</h2>
        <p className="mb-3">행성마다 중력의 크기가 달라 같은 사람이라도 무게가 다르게 측정됩니다. 지구에서 70kg인 사람이 달에서는 약 11.6kg, 화성에서는 약 26.5kg, 목성에서는 약 165kg이 됩니다. 행성 무게 계산기는 NASA에서 공개한 표면 중력 데이터를 기반으로 8개 행성과 달, 명왕성에서의 무게를 즉시 환산해줍니다.</p>
        <p className="mb-3">행성의 공전 주기를 활용하면 다른 행성에서의 나이도 계산할 수 있습니다. 수성의 1년은 지구의 약 88일이라 30세 지구인은 수성에서 124세지만, 해왕성의 1년은 지구의 약 165년이라 같은 사람이 해왕성에서는 0.18세입니다. 행성 나이 계산기는 생일 입력만으로 8개 행성에서의 정확한 나이를 보여줍니다.</p>
        <h3 className="mt-5 mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">우주 거리 단위가 헷갈릴 때</h3>
        <p className="mb-3">우주 거리는 km로 표현하기엔 숫자가 너무 커 천문단위(AU), 광년(ly), 파섹(pc)을 사용합니다. 1AU는 지구-태양 거리(약 1억 4,960만km), 1광년은 빛이 1년 동안 가는 거리(약 9.46조km), 1파섹은 약 3.26광년입니다. 우주 거리 변환 도구는 km·AU·광년·파섹·마일을 양방향으로 즉시 환산합니다.</p>
        <h3 className="mt-5 mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">빛도 시간이 걸린다는 사실</h3>
        <p>태양 빛은 지구에 도달하는 데 약 8분 20초가 걸리고, 가장 가까운 항성 프록시마 센타우리의 빛은 4.24년 전에 출발한 빛입니다. 빛 여행 시간 계산기는 임의의 거리를 입력하면 빛, 보이저호, 여객기 속도로 도달하는 데 걸리는 시간을 비교해 보여줍니다. 천문학·과학교과 보조자료, 우주 관련 콘텐츠 제작에 유용합니다.</p>
      </section>

      <div className="grid gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.path}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-space dark:bg-cyan-950">
              <span className="text-lg">🪐</span>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">{tool.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{tool.description}</p>
            </div>
            <svg
              className="ml-auto h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "우주/과학",
          "url": "https://www.oktools.co.kr/space",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "행성 무게 계산기", "url": "https://www.oktools.co.kr/space/planet-weight" },
              { "@type": "ListItem", "position": 2, "name": "우주 거리 변환", "url": "https://www.oktools.co.kr/space/distance" },
              { "@type": "ListItem", "position": 3, "name": "빛 여행 시간 계산기", "url": "https://www.oktools.co.kr/space/travel-time" },
              { "@type": "ListItem", "position": 4, "name": "행성 나이 계산기", "url": "https://www.oktools.co.kr/space/planet-age" }
            ]
          }
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "우주/과학" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "다른 행성에서 내 몸무게는 어떻게 다른가요?", "acceptedAnswer": { "@type": "Answer", "text": "행성마다 표면 중력이 달라 무게도 달라집니다. 달은 지구 중력의 약 16.6%, 화성은 약 37.8%, 목성은 약 236%입니다. 지구에서 70kg인 사람은 달에서 11.6kg, 화성에서 26.5kg, 목성에서 약 165kg이 됩니다. 행성 무게 계산기는 NASA 표면 중력 데이터로 즉시 환산해줍니다." } },
            { "@type": "Question", "name": "광년과 천문단위는 어떻게 다른가요?", "acceptedAnswer": { "@type": "Answer", "text": "1광년(ly)은 빛이 1년 동안 진공에서 이동하는 거리(약 9.46조km)이고, 1천문단위(AU)는 지구와 태양 사이의 평균 거리(약 1억 4,960만km)입니다. 1광년은 약 63,241AU에 해당합니다. 태양계 내 거리에는 AU, 항성 간 거리에는 광년, 은하 규모 거리에는 파섹(1pc≈3.26광년)이 주로 쓰입니다." } },
            { "@type": "Question", "name": "다른 행성에서 나이는 왜 달라지나요?", "acceptedAnswer": { "@type": "Answer", "text": "각 행성의 1년(공전 주기)이 다르기 때문입니다. 수성은 88일, 금성 225일, 화성 687일, 목성 약 12년, 해왕성 약 165년입니다. 행성 나이 계산기는 생년월일을 기준으로 각 행성에서 몇 번의 공전을 거쳤는지 환산해 행성 기준 나이를 보여줍니다." } },
            { "@type": "Question", "name": "빛으로 우주를 여행하면 얼마나 걸리나요?", "acceptedAnswer": { "@type": "Answer", "text": "태양→지구는 약 8분 20초, 지구→달은 약 1.28초, 지구→화성(평균)은 약 12.5분이 빛 속도로 걸립니다. 가장 가까운 항성 프록시마 센타우리는 4.24년, 안드로메다 은하는 약 250만 년이 걸립니다. 빛 여행 시간 계산기로 임의 거리에서 빛/보이저/비행기 속도를 비교해보세요." } },
            { "@type": "Question", "name": "이 우주 계산기들은 학교 과제에 사용해도 되나요?", "acceptedAnswer": { "@type": "Answer", "text": "네, 행성 중력·공전 주기 데이터는 NASA Planetary Fact Sheet 기준이며 광속·천문단위 환산은 국제천문연맹(IAU) 정의를 따릅니다. 초·중·고 자유탐구, 과학 발표, 우주 관련 블로그 콘텐츠에 자유롭게 활용할 수 있습니다." } }
          ]
        }) }}
      />
    </div>
  );
}
