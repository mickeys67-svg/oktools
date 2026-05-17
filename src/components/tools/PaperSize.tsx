"use client";

import { useMemo, useState } from "react";

type SeriesId =
  | "A"
  | "B"
  | "C"
  | "US"
  | "ANSI"
  | "ARCH"
  | "PHOTO"
  | "JEONJI"
  | "PAN"
  | "KR";

type PaperRow = {
  id: string;
  name: string;
  series: SeriesId;
  widthMm: number;
  heightMm: number;
  note?: string;
};

// ISO 216 + 한국 전지/판형 + ANSI/ARCH 등 공식 mm 값
const PAPERS: PaperRow[] = [
  // 한국 전지 (인쇄소 원지) — 가장 먼저 노출
  { id: "JEONJI-46", name: "사륙전지 (4·6전지)", series: "JEONJI", widthMm: 788, heightMm: 1091, note: "출판·서적 인쇄 표준 원지" },
  { id: "JEONJI-46-2", name: "사륙반절 (2절)", series: "JEONJI", widthMm: 545.5, heightMm: 788, note: "사륙전지 절반" },
  { id: "JEONJI-Kuk", name: "국전지", series: "JEONJI", widthMm: 636, heightMm: 939, note: "국판 16면 인쇄 원지" },
  { id: "JEONJI-Kuk-2", name: "국반절 (2절)", series: "JEONJI", widthMm: 469.5, heightMm: 636, note: "국전지 절반" },
  { id: "JEONJI-Hardlong", name: "하드롱 전지", series: "JEONJI", widthMm: 900, heightMm: 1200, note: "대형 포스터·패키지" },
  { id: "JEONJI-Hardlong-2", name: "하드롱 2절", series: "JEONJI", widthMm: 600, heightMm: 900, note: "하드롱 절반" },
  { id: "JEONJI-AGeun", name: "A전지", series: "JEONJI", widthMm: 625, heightMm: 880, note: "A판 원지" },
  { id: "JEONJI-BGeun", name: "B전지", series: "JEONJI", widthMm: 765, heightMm: 1085, note: "B판 원지" },

  // 한국 판형 (도서·인쇄 완제품)
  { id: "PAN-Kuk", name: "국판", series: "PAN", widthMm: 148, heightMm: 210, note: "단행본 표준 (≈A5)" },
  { id: "PAN-SinKuk", name: "신국판", series: "PAN", widthMm: 152, heightMm: 225, note: "교양서·문학" },
  { id: "PAN-KukBae", name: "국배판", series: "PAN", widthMm: 210, heightMm: 297, note: "잡지·실용서 (≈A4)" },
  { id: "PAN-46", name: "4·6판 (시로쿠)", series: "PAN", widthMm: 127, heightMm: 188, note: "문고본·소설" },
  { id: "PAN-46Bae", name: "4·6배판", series: "PAN", widthMm: 188, heightMm: 257, note: "교과서·전공서" },
  { id: "PAN-Crown", name: "크라운판", series: "PAN", widthMm: 176, heightMm: 248, note: "사진집·화보" },
  { id: "PAN-Tabloid", name: "타블로이드판", series: "PAN", widthMm: 272, heightMm: 391, note: "잡지·간행물" },
  { id: "PAN-Mungo", name: "문고판", series: "PAN", widthMm: 105, heightMm: 148, note: "소형 문고본 (≈A6)" },

  // A 시리즈 (ISO 216) — 일반 인쇄·복사·문서 표준
  { id: "A0", name: "A0", series: "A", widthMm: 841, heightMm: 1189, note: "포스터 대형" },
  { id: "A1", name: "A1", series: "A", widthMm: 594, heightMm: 841, note: "전시 포스터" },
  { id: "A2", name: "A2", series: "A", widthMm: 420, heightMm: 594, note: "그림·달력" },
  { id: "A3", name: "A3", series: "A", widthMm: 297, heightMm: 420, note: "도면·악보" },
  { id: "A4", name: "A4", series: "A", widthMm: 210, heightMm: 297, note: "복사용지·문서 표준" },
  { id: "A5", name: "A5", series: "A", widthMm: 148, heightMm: 210, note: "노트·전단지" },
  { id: "A6", name: "A6", series: "A", widthMm: 105, heightMm: 148, note: "엽서·포켓 메모" },
  { id: "A7", name: "A7", series: "A", widthMm: 74, heightMm: 105, note: "미니 카드" },
  { id: "A8", name: "A8", series: "A", widthMm: 52, heightMm: 74 },
  { id: "A9", name: "A9", series: "A", widthMm: 37, heightMm: 52 },
  { id: "A10", name: "A10", series: "A", widthMm: 26, heightMm: 37 },

  // B 시리즈 (ISO 216) — 도서·잡지·포스터
  { id: "B0", name: "B0", series: "B", widthMm: 1000, heightMm: 1414, note: "초대형 포스터" },
  { id: "B1", name: "B1", series: "B", widthMm: 707, heightMm: 1000 },
  { id: "B2", name: "B2", series: "B", widthMm: 500, heightMm: 707 },
  { id: "B3", name: "B3", series: "B", widthMm: 353, heightMm: 500 },
  { id: "B4", name: "B4", series: "B", widthMm: 250, heightMm: 353, note: "신문 타블로이드" },
  { id: "B5", name: "B5", series: "B", widthMm: 176, heightMm: 250, note: "도서·교재" },
  { id: "B6", name: "B6", series: "B", widthMm: 125, heightMm: 176, note: "수첩·문고본" },
  { id: "B7", name: "B7", series: "B", widthMm: 88, heightMm: 125 },
  { id: "B8", name: "B8", series: "B", widthMm: 62, heightMm: 88 },

  // C 시리즈 (봉투용)
  { id: "C3", name: "C3", series: "C", widthMm: 324, heightMm: 458, note: "B4 용지 수납 봉투" },
  { id: "C4", name: "C4", series: "C", widthMm: 229, heightMm: 324, note: "A4 무접지 봉투" },
  { id: "C5", name: "C5", series: "C", widthMm: 162, heightMm: 229, note: "A4 반접 봉투" },
  { id: "C6", name: "C6", series: "C", widthMm: 114, heightMm: 162, note: "A4 3접지 봉투" },
  { id: "C7", name: "C7", series: "C", widthMm: 81, heightMm: 114 },

  // 미국 표준 종이
  { id: "US-Letter", name: "Letter", series: "US", widthMm: 215.9, heightMm: 279.4, note: "미국 표준 (8.5 × 11 in)" },
  { id: "US-Legal", name: "Legal", series: "US", widthMm: 215.9, heightMm: 355.6, note: "미국 법률 문서 (8.5 × 14 in)" },
  { id: "US-Tabloid", name: "Tabloid/Ledger", series: "US", widthMm: 279.4, heightMm: 431.8, note: "미국 신문 (11 × 17 in)" },
  { id: "US-Executive", name: "Executive", series: "US", widthMm: 184.15, heightMm: 266.7, note: "임원 서신 (7.25 × 10.5 in)" },
  { id: "US-Junior", name: "Junior Legal", series: "US", widthMm: 127, heightMm: 203.2, note: "5 × 8 in" },
  { id: "US-HalfLetter", name: "Half Letter", series: "US", widthMm: 139.7, heightMm: 215.9, note: "Letter 반접 (5.5 × 8.5 in)" },

  // ANSI 도면 (ANSI Y14.1)
  { id: "ANSI-A", name: "ANSI A", series: "ANSI", widthMm: 215.9, heightMm: 279.4, note: "Letter 동등 (8.5 × 11)" },
  { id: "ANSI-B", name: "ANSI B", series: "ANSI", widthMm: 279.4, heightMm: 431.8, note: "Tabloid 동등 (11 × 17)" },
  { id: "ANSI-C", name: "ANSI C", series: "ANSI", widthMm: 431.8, heightMm: 558.8, note: "엔지니어 도면 (17 × 22)" },
  { id: "ANSI-D", name: "ANSI D", series: "ANSI", widthMm: 558.8, heightMm: 863.6, note: "기계 도면 (22 × 34)" },
  { id: "ANSI-E", name: "ANSI E", series: "ANSI", widthMm: 863.6, heightMm: 1117.6, note: "대형 도면 (34 × 44)" },

  // ARCH (Architectural) 건축 도면
  { id: "ARCH-A", name: "ARCH A", series: "ARCH", widthMm: 228.6, heightMm: 304.8, note: "건축 스케치 (9 × 12)" },
  { id: "ARCH-B", name: "ARCH B", series: "ARCH", widthMm: 304.8, heightMm: 457.2, note: "건축 도면 (12 × 18)" },
  { id: "ARCH-C", name: "ARCH C", series: "ARCH", widthMm: 457.2, heightMm: 609.6, note: "평면도 (18 × 24)" },
  { id: "ARCH-D", name: "ARCH D", series: "ARCH", widthMm: 609.6, heightMm: 914.4, note: "건축 표준 (24 × 36)" },
  { id: "ARCH-E", name: "ARCH E", series: "ARCH", widthMm: 914.4, heightMm: 1219.2, note: "대형 건축 (36 × 48)" },
  { id: "ARCH-E1", name: "ARCH E1", series: "ARCH", widthMm: 762, heightMm: 1066.8, note: "ARCH E 축소 (30 × 42)" },

  // 사진 규격 (KR 인화 표준)
  { id: "PHOTO-3x5", name: "3R (3×5)", series: "PHOTO", widthMm: 89, heightMm: 127, note: "지갑·미니 인화" },
  { id: "PHOTO-4x6", name: "4R (4×6)", series: "PHOTO", widthMm: 102, heightMm: 152, note: "일반 인화 표준" },
  { id: "PHOTO-5x7", name: "5R (5×7)", series: "PHOTO", widthMm: 127, heightMm: 178, note: "액자 인화" },
  { id: "PHOTO-8x10", name: "8R (8×10)", series: "PHOTO", widthMm: 203, heightMm: 254, note: "대형 액자" },
  { id: "PHOTO-11x14", name: "11R (11×14)", series: "PHOTO", widthMm: 279, heightMm: 356, note: "대형 인화" },
  { id: "PHOTO-16x20", name: "16R (16×20)", series: "PHOTO", widthMm: 406, heightMm: 508, note: "전시 인화" },

  // 한국 규격
  { id: "KR-Card", name: "명함 (한국)", series: "KR", widthMm: 90, heightMm: 50, note: "표준 명함" },
  { id: "KR-Card-US", name: "명함 (미국)", series: "KR", widthMm: 88.9, heightMm: 50.8, note: "3.5 × 2 in" },
  { id: "KR-IDPhoto", name: "증명사진", series: "KR", widthMm: 35, heightMm: 45, note: "주민증·여권 (3.5×4.5 cm)" },
  { id: "KR-PassportPhoto", name: "여권사진", series: "KR", widthMm: 35, heightMm: 45, note: "ICAO 표준" },
  { id: "KR-Newspaper-Berliner", name: "신문 베를리너", series: "KR", widthMm: 315, heightMm: 470, note: "중앙일보·조선일보" },
  { id: "KR-Newspaper-Broadsheet", name: "신문 대판", series: "KR", widthMm: 391, heightMm: 545, note: "전통 신문 (조선·동아)" },
  { id: "KR-Postcard", name: "엽서 (우편)", series: "KR", widthMm: 100, heightMm: 148, note: "우정사업본부 규격" },
];

// 평량(g/m²) 종이 유형 프리셋 — 한국 인쇄 시장 표준
const GSM_PRESETS = [
  { label: "신문지 (45)", value: 45 },
  { label: "복사용지 80gsm", value: 80 },
  { label: "모조지 100gsm", value: 100 },
  { label: "아트지 150gsm", value: 150 },
  { label: "명함지 250gsm", value: 250 },
  { label: "두꺼운 도화지 300gsm", value: 300 },
];

// 1연(連) = 500매 — 한국 인쇄 산업 표준 단위
const SHEETS_PER_REAM = 500;

const DPI_PRESETS = [
  { label: "72 (웹)", value: 72 },
  { label: "96 (모니터)", value: 96 },
  { label: "150 (잉크젯)", value: 150 },
  { label: "300 (인쇄)", value: 300 },
  { label: "600 (고품질)", value: 600 },
];

const MM_PER_INCH = 25.4;
const PT_PER_INCH = 72;

function mmToInch(mm: number): number {
  return mm / MM_PER_INCH;
}
function mmToPx(mm: number, dpi: number): number {
  return Math.round((mm / MM_PER_INCH) * dpi);
}
function mmToPt(mm: number): number {
  return (mm / MM_PER_INCH) * PT_PER_INCH;
}
function fmt(n: number, decimals = 2): string {
  return Number(n.toFixed(decimals)).toLocaleString("ko-KR");
}

export default function PaperSize() {
  const [selectedId, setSelectedId] = useState<string>("A4");
  const [dpi, setDpi] = useState<number>(300);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");
  const [seriesFilter, setSeriesFilter] = useState<PaperRow["series"] | "ALL">("ALL");
  const [copied, setCopied] = useState<string>("");

  const paper = useMemo(
    () => PAPERS.find((p) => p.id === selectedId) ?? PAPERS.find((p) => p.id === "A4")!,
    [selectedId],
  );

  const oriented = useMemo(() => {
    if (orientation === "portrait") {
      return { w: paper.widthMm, h: paper.heightMm };
    }
    return { w: paper.heightMm, h: paper.widthMm };
  }, [paper, orientation]);

  const filteredPapers = useMemo(() => {
    if (seriesFilter === "ALL") return PAPERS;
    return PAPERS.filter((p) => p.series === seriesFilter);
  }, [seriesFilter]);

  // 시각 비교 — 큰 변이 220px 이내가 되도록 스케일
  const visual = useMemo(() => {
    const maxEdge = Math.max(oriented.w, oriented.h, 297);
    const scale = 220 / maxEdge;
    return {
      a4: { w: 210 * scale, h: 297 * scale },
      paper: { w: oriented.w * scale, h: oriented.h * scale },
    };
  }, [oriented]);

  const ratioToA4 = useMemo(() => {
    const a4Area = 210 * 297;
    const area = oriented.w * oriented.h;
    return area / a4Area;
  }, [oriented]);

  // 연(連)/평량 상태 — 1연 = 500매 기준 종이 무게 계산
  const [gsm, setGsm] = useState<number>(80);
  const [sheets, setSheets] = useState<number>(500);

  const weightCalc = useMemo(() => {
    const areaM2 = (oriented.w / 1000) * (oriented.h / 1000);
    const perSheetG = areaM2 * gsm;
    const totalG = perSheetG * sheets;
    const reams = sheets / SHEETS_PER_REAM;
    return {
      areaM2,
      perSheetG,
      totalG,
      totalKg: totalG / 1000,
      reams,
    };
  }, [oriented, gsm, sheets]);

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(""), 1500);
    } catch {
      /* ignore */
    }
  };

  const seriesLabel: Record<SeriesId | "ALL", string> = {
    ALL: "전체",
    JEONJI: "전지(全紙)",
    PAN: "한국 판형",
    A: "A 시리즈",
    B: "B 시리즈",
    C: "C 봉투",
    US: "미국 규격",
    ANSI: "ANSI 도면",
    ARCH: "ARCH 건축",
    PHOTO: "사진",
    KR: "한국 규격",
  };

  const widthPx = mmToPx(oriented.w, dpi);
  const heightPx = mmToPx(oriented.h, dpi);
  const widthIn = mmToInch(oriented.w);
  const heightIn = mmToInch(oriented.h);
  const widthPt = mmToPt(oriented.w);
  const heightPt = mmToPt(oriented.h);

  return (
    <div className="space-y-6">
      {/* 종이 선택 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
          종이 규격 선택
        </label>
        <div className="mb-3 flex flex-wrap gap-2">
          {(["ALL", "JEONJI", "PAN", "A", "B", "C", "US", "ANSI", "ARCH", "PHOTO", "KR"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSeriesFilter(s)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                seriesFilter === s
                  ? "bg-utility text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              {seriesLabel[s]}
            </button>
          ))}
        </div>
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        >
          {filteredPapers.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} — {fmt(p.widthMm, 1)} × {fmt(p.heightMm, 1)} mm{p.note ? ` (${p.note})` : ""}
            </option>
          ))}
        </select>

        {/* 방향 */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">방향</span>
          <div className="flex rounded-lg border border-gray-300 p-1 dark:border-gray-700">
            <button
              onClick={() => setOrientation("portrait")}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                orientation === "portrait"
                  ? "bg-utility text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              세로
            </button>
            <button
              onClick={() => setOrientation("landscape")}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                orientation === "landscape"
                  ? "bg-utility text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              가로
            </button>
          </div>
        </div>

        {/* DPI */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            해상도 (DPI) — 픽셀 변환 기준
          </label>
          <div className="flex flex-wrap gap-2">
            {DPI_PRESETS.map((d) => (
              <button
                key={d.value}
                onClick={() => setDpi(d.value)}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  dpi === d.value
                    ? "bg-utility text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 결과 + 시각화 */}
      <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
        {/* 단위별 값 */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-4 text-base font-bold text-gray-900 dark:text-gray-100">
            {paper.name} {orientation === "landscape" ? "(가로)" : "(세로)"}
          </h3>

          <dl className="space-y-3 text-sm">
            <Row
              label="밀리미터 (mm)"
              value={`${fmt(oriented.w, 1)} × ${fmt(oriented.h, 1)} mm`}
              onCopy={() => copy("mm", `${fmt(oriented.w, 1)} x ${fmt(oriented.h, 1)} mm`)}
              copied={copied === "mm"}
            />
            <Row
              label="센티미터 (cm)"
              value={`${fmt(oriented.w / 10, 2)} × ${fmt(oriented.h / 10, 2)} cm`}
              onCopy={() => copy("cm", `${fmt(oriented.w / 10, 2)} x ${fmt(oriented.h / 10, 2)} cm`)}
              copied={copied === "cm"}
            />
            <Row
              label="인치 (in)"
              value={`${fmt(widthIn, 3)} × ${fmt(heightIn, 3)} in`}
              onCopy={() => copy("in", `${fmt(widthIn, 3)} x ${fmt(heightIn, 3)} in`)}
              copied={copied === "in"}
            />
            <Row
              label={`픽셀 (${dpi} DPI)`}
              value={`${widthPx.toLocaleString()} × ${heightPx.toLocaleString()} px`}
              onCopy={() => copy("px", `${widthPx} x ${heightPx} px`)}
              copied={copied === "px"}
            />
            <Row
              label="포인트 (pt, 1/72 in)"
              value={`${fmt(widthPt, 1)} × ${fmt(heightPt, 1)} pt`}
              onCopy={() => copy("pt", `${fmt(widthPt, 1)} x ${fmt(heightPt, 1)} pt`)}
              copied={copied === "pt"}
            />
            <Row
              label="가로세로비"
              value={`1 : ${(oriented.h / oriented.w).toFixed(3)}`}
            />
            <Row
              label="면적 (A4 대비)"
              value={`${fmt(ratioToA4 * 100, 1)} %`}
            />
          </dl>
        </div>

        {/* 시각 비교 (A4 점선 + 선택된 종이) */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950 sm:min-w-[280px]">
          <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">시각 비교 (A4 점선 기준)</p>
          <div
            className="relative flex items-center justify-center"
            style={{ width: 240, height: 240 }}
          >
            {/* A4 reference (always portrait shape, scaled to fit) */}
            <div
              className="absolute border-2 border-dashed border-gray-300 dark:border-gray-700"
              style={{ width: visual.a4.w, height: visual.a4.h }}
            />
            {/* Selected paper */}
            <div
              className="absolute border-2 border-utility bg-utility/10"
              style={{ width: visual.paper.w, height: visual.paper.h }}
            />
          </div>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            <span className="font-bold text-utility">{paper.name}</span> vs A4
          </p>
        </div>
      </div>

      {/* 연(連) · 평량(g/m²) 무게 계산기 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-1 text-base font-bold text-gray-900 dark:text-gray-100">
          연(連)·평량 종이 무게 계산기
        </h3>
        <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
          현재 선택한 <strong className="text-utility">{paper.name}</strong> 기준 — 1연(連) = 500매 (한국 인쇄 산업 표준)
        </p>

        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              평량 (g/m²)
            </label>
            <input
              type="number"
              min={20}
              max={500}
              value={gsm}
              onChange={(e) => setGsm(Math.max(1, Number(e.target.value) || 0))}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
            <div className="mt-2 flex flex-wrap gap-1.5">
              {GSM_PRESETS.map((g) => (
                <button
                  key={g.value}
                  onClick={() => setGsm(g.value)}
                  className={`rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
                    gsm === g.value
                      ? "bg-utility text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              매수 (장)
            </label>
            <input
              type="number"
              min={1}
              value={sheets}
              onChange={(e) => setSheets(Math.max(1, Number(e.target.value) || 0))}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
            <div className="mt-2 flex flex-wrap gap-1.5">
              {[1, 100, 500, 1000, 5000].map((n) => (
                <button
                  key={n}
                  onClick={() => setSheets(n)}
                  className={`rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
                    sheets === n
                      ? "bg-utility text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  }`}
                >
                  {n === 500 ? "1연 (500)" : n === 5000 ? "1속 (5,000)" : n.toLocaleString()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <dl className="space-y-2 rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-800/50">
          <Row label="장당 면적" value={`${fmt(weightCalc.areaM2 * 10000, 1)} cm² (${fmt(weightCalc.areaM2, 4)} m²)`} />
          <Row label="장당 무게" value={`${fmt(weightCalc.perSheetG, 2)} g`} />
          <Row label="연(連) 환산" value={`${fmt(weightCalc.reams, 2)} 연`} />
          <Row
            label="총 무게"
            value={
              weightCalc.totalKg >= 1
                ? `${fmt(weightCalc.totalKg, 2)} kg (${fmt(weightCalc.totalG, 0)} g)`
                : `${fmt(weightCalc.totalG, 1)} g`
            }
            onCopy={() =>
              copy(
                "weight",
                weightCalc.totalKg >= 1
                  ? `${fmt(weightCalc.totalKg, 2)} kg`
                  : `${fmt(weightCalc.totalG, 1)} g`,
              )
            }
            copied={copied === "weight"}
          />
        </dl>
        <p className="mt-2 text-[11px] text-gray-500 dark:text-gray-400">
          계산식: <strong>면적(m²) × 평량(g/m²) × 매수</strong> · 평량은 ㎡당 무게로 한국·일본·유럽에서 표준 사용
        </p>
      </div>

      {/* 전체 비교표 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-3 text-base font-bold text-gray-900 dark:text-gray-100">
          {seriesLabel[seriesFilter]} 비교표
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
                <th className="py-2 pr-3">규격</th>
                <th className="py-2 pr-3">mm</th>
                <th className="py-2 pr-3">inch</th>
                <th className="py-2 pr-3 text-right">{dpi} DPI px</th>
              </tr>
            </thead>
            <tbody>
              {filteredPapers.map((p) => {
                const isSelected = p.id === selectedId;
                return (
                  <tr
                    key={p.id}
                    onClick={() => setSelectedId(p.id)}
                    className={`cursor-pointer border-b border-gray-100 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800 ${
                      isSelected ? "bg-blue-50 dark:bg-blue-950/30" : ""
                    }`}
                  >
                    <td className="py-2 pr-3 font-medium text-gray-900 dark:text-gray-100">
                      {p.name}
                    </td>
                    <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">
                      {fmt(p.widthMm, 1)} × {fmt(p.heightMm, 1)}
                    </td>
                    <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">
                      {fmt(mmToInch(p.widthMm), 2)} × {fmt(mmToInch(p.heightMm), 2)}
                    </td>
                    <td className="py-2 pr-3 text-right text-gray-600 dark:text-gray-400">
                      {mmToPx(p.widthMm, dpi).toLocaleString()} × {mmToPx(p.heightMm, dpi).toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  onCopy,
  copied,
}: {
  label: string;
  value: string;
  onCopy?: () => void;
  copied?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-2 last:border-0 dark:border-gray-800">
      <dt className="text-xs text-gray-500 dark:text-gray-400">{label}</dt>
      <dd className="flex items-center gap-2">
        <span className="font-semibold text-gray-900 dark:text-gray-100">{value}</span>
        {onCopy && (
          <button
            onClick={onCopy}
            className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            {copied ? "복사됨" : "복사"}
          </button>
        )}
      </dd>
    </div>
  );
}
