export interface Tool {
  id: string;
  name: string;
  description: string;
  category: CategoryId;
  path: string;
  icon: string; // Lucide icon name
  popular?: boolean;
}

export type CategoryId =
  | "finance"
  | "health"
  | "tools"
  | "fortune"
  | "space"
  | "convert"
  | "life";

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  color: string; // Tailwind class
  colorHex: string;
  icon: string;
  path: string;
}

export const categories: Category[] = [
  {
    id: "finance",
    name: "금융 계산기",
    description: "대출, 할부, 연봉, 세금 등 금융 계산",
    color: "text-finance",
    colorHex: "#10B981",
    icon: "Banknote",
    path: "/finance",
  },
  {
    id: "health",
    name: "건강 계산기",
    description: "BMI, 바이오리듬, 칼로리, 나이 계산",
    color: "text-health",
    colorHex: "#F43F5E",
    icon: "Heart",
    path: "/health",
  },
  {
    id: "tools",
    name: "유틸리티",
    description: "시계, 타이머, 스톱워치, 글자수 등 도구",
    color: "text-utility",
    colorHex: "#3B82F6",
    icon: "Wrench",
    path: "/tools",
  },
  {
    id: "fortune",
    name: "운세/재미",
    description: "타로, 토정비결, 궁합, 꿈해몽",
    color: "text-fortune",
    colorHex: "#8B5CF6",
    icon: "Sparkles",
    path: "/fortune",
  },
  {
    id: "space",
    name: "우주/과학",
    description: "우주 거리, 행성 무게, 빛 여행 시간",
    color: "text-space",
    colorHex: "#06B6D4",
    icon: "Rocket",
    path: "/space",
  },
  {
    id: "convert",
    name: "단위 변환",
    description: "길이, 무게, 면적, 온도 등 단위 변환",
    color: "text-converter",
    colorHex: "#F59E0B",
    icon: "ArrowLeftRight",
    path: "/convert",
  },
  {
    id: "life",
    name: "생활 도구",
    description: "전기요금, 학점, 로또, 퍼센트 계산",
    color: "text-life",
    colorHex: "#EC4899",
    icon: "Home",
    path: "/life",
  },
];

export const tools: Tool[] = [
  // ─── Finance ──────────────────────────────────────────────────────
  {
    id: "loan-calculator",
    name: "대출 이자 계산기",
    description: "원리금균등, 원금균등, 만기일시 상환 방식별 대출 이자 계산",
    category: "finance",
    path: "/finance/loan-calculator",
    icon: "Landmark",
    popular: true,
  },
  {
    id: "installment",
    name: "할부 계산기",
    description: "카드 할부 수수료 및 월 할부금 계산",
    category: "finance",
    path: "/finance/installment",
    icon: "CreditCard",
    popular: true,
  },
  {
    id: "salary",
    name: "연봉 실수령액 계산기",
    description: "4대 보험, 소득세 공제 후 실수령액 계산",
    category: "finance",
    path: "/finance/salary",
    icon: "Wallet",
    popular: true,
  },
  {
    id: "retirement",
    name: "퇴직금 계산기",
    description: "근속연수 기반 퇴직금 계산",
    category: "finance",
    path: "/finance/retirement",
    icon: "Briefcase",
  },
  {
    id: "savings",
    name: "적금 이자 계산기",
    description: "단리/복리 적금 만기 수령액 계산",
    category: "finance",
    path: "/finance/savings",
    icon: "PiggyBank",
  },
  {
    id: "deposit",
    name: "예금 이자 계산기",
    description: "예금 이자 및 세후 수령액 계산",
    category: "finance",
    path: "/finance/deposit",
    icon: "Building2",
  },
  {
    id: "compound-interest",
    name: "복리 계산기",
    description: "복리 효과 시뮬레이션 및 투자 성장 계산",
    category: "finance",
    path: "/finance/compound-interest",
    icon: "TrendingUp",
  },

  // ─── Health ───────────────────────────────────────────────────────
  {
    id: "bmi",
    name: "BMI 계산기",
    description: "키와 몸무게로 체질량지수(BMI) 계산",
    category: "health",
    path: "/health/bmi",
    icon: "Scale",
    popular: true,
  },
  {
    id: "bmr",
    name: "기초대사량 계산기",
    description: "하루 기초대사량(BMR) 및 권장 칼로리 계산",
    category: "health",
    path: "/health/bmr",
    icon: "Flame",
  },
  {
    id: "biorhythm",
    name: "바이오리듬",
    description: "신체, 감성, 지성 바이오리듬 차트 확인",
    category: "health",
    path: "/health/biorhythm",
    icon: "Activity",
    popular: true,
  },
  {
    id: "age",
    name: "만 나이 계산기",
    description: "생년월일로 정확한 만 나이 계산",
    category: "health",
    path: "/health/age",
    icon: "Cake",
    popular: true,
  },
  {
    id: "dday",
    name: "D-Day 계산기",
    description: "특정 날짜까지 남은 일수 또는 지난 일수 계산",
    category: "health",
    path: "/health/dday",
    icon: "CalendarDays",
  },
  {
    id: "pregnancy",
    name: "임신 주수 계산기",
    description: "마지막 생리일 기준 임신 주수 및 출산 예정일 계산",
    category: "health",
    path: "/health/pregnancy",
    icon: "Baby",
  },

  // ─── Utilities ────────────────────────────────────────────────────
  {
    id: "clock",
    name: "온라인 시계",
    description: "아름다운 디자인의 전체화면 벽시계",
    category: "tools",
    path: "/tools/clock",
    icon: "Clock",
    popular: true,
  },
  {
    id: "timer",
    name: "타이머",
    description: "프리셋 지원 온라인 카운트다운 타이머",
    category: "tools",
    path: "/tools/timer",
    icon: "Timer",
    popular: true,
  },
  {
    id: "stopwatch",
    name: "스톱워치",
    description: "랩타임 기능 지원 온라인 스톱워치",
    category: "tools",
    path: "/tools/stopwatch",
    icon: "CircleDot",
  },
  {
    id: "character-count",
    name: "글자수 세기",
    description: "한글, 영문, 공백 포함/제외 글자수 카운트",
    category: "tools",
    path: "/tools/character-count",
    icon: "Type",
  },
  {
    id: "random-number",
    name: "랜덤 번호 생성기",
    description: "로또 번호, 랜덤 숫자, 추첨 번호 생성",
    category: "tools",
    path: "/tools/random-number",
    icon: "Dice5",
  },
  {
    id: "lotto",
    name: "로또 번호 추천",
    description: "미출현 번호, 고빈도 번호, 균형 추천 등 로또 6/45 스마트 번호 추천",
    category: "tools",
    path: "/tools/lotto",
    icon: "Clover",
    popular: true,
  },

  // ─── Fortune ──────────────────────────────────────────────────────
  {
    id: "tarot",
    name: "타로카드",
    description: "무료 온라인 타로카드 리딩",
    category: "fortune",
    path: "/fortune/tarot",
    icon: "Star",
    popular: true,
  },
  {
    id: "tojeong",
    name: "토정비결",
    description: "생년월일로 보는 올해의 운세",
    category: "fortune",
    path: "/fortune/tojeong",
    icon: "BookOpen",
    popular: true,
  },
  {
    id: "zodiac",
    name: "별자리 운세",
    description: "12별자리별 오늘의 운세",
    category: "fortune",
    path: "/fortune/zodiac",
    icon: "Sun",
  },
  {
    id: "mbti-compatibility",
    name: "MBTI 궁합",
    description: "MBTI 유형별 궁합 확인",
    category: "fortune",
    path: "/fortune/mbti",
    icon: "Users",
  },
  {
    id: "dream",
    name: "꿈해몽",
    description: "꿈의 의미를 풀이하는 꿈해몽 사전",
    category: "fortune",
    path: "/fortune/dream",
    icon: "Moon",
  },

  // ─── Space ────────────────────────────────────────────────────────
  {
    id: "planet-weight",
    name: "행성 무게 계산기",
    description: "다른 행성에서의 내 몸무게 계산",
    category: "space",
    path: "/space/planet-weight",
    icon: "Globe",
    popular: true,
  },
  {
    id: "space-distance",
    name: "우주 거리 변환",
    description: "광년, 천문단위, 파섹 등 우주 거리 변환",
    category: "space",
    path: "/space/distance",
    icon: "Orbit",
  },
  {
    id: "light-travel",
    name: "빛 여행 시간 계산기",
    description: "빛, 비행기, KTX로 우주를 여행하면 걸리는 시간",
    category: "space",
    path: "/space/travel-time",
    icon: "Zap",
  },
  {
    id: "planet-age",
    name: "행성 나이 계산기",
    description: "다른 행성에서의 내 나이 계산",
    category: "space",
    path: "/space/planet-age",
    icon: "CalendarClock",
  },

  // ─── Convert ──────────────────────────────────────────────────────
  {
    id: "length-convert",
    name: "길이 변환",
    description: "미터, 피트, 인치, 킬로미터, 마일 등 길이 단위 변환",
    category: "convert",
    path: "/length",
    icon: "Ruler",
  },
  {
    id: "weight-convert",
    name: "무게 변환",
    description: "킬로그램, 파운드, 온스, 그램 등 무게 단위 변환",
    category: "convert",
    path: "/weight",
    icon: "Scale",
  },
  {
    id: "temperature-convert",
    name: "온도 변환",
    description: "섭씨, 화씨, 켈빈 온도 단위 변환",
    category: "convert",
    path: "/temperature",
    icon: "Thermometer",
  },
  {
    id: "area-convert",
    name: "면적 변환",
    description: "제곱미터, 에이커, 평, 제곱피트 등 면적 단위 변환",
    category: "convert",
    path: "/area",
    icon: "Square",
  },
  {
    id: "volume-convert",
    name: "부피 변환",
    description: "리터, 갤런, 컵, 밀리리터 등 부피 단위 변환",
    category: "convert",
    path: "/volume",
    icon: "Beaker",
  },
  {
    id: "speed-convert",
    name: "속도 변환",
    description: "km/h, mph, m/s, 노트 등 속도 단위 변환",
    category: "convert",
    path: "/speed",
    icon: "Gauge",
  },
  {
    id: "data-convert",
    name: "데이터 변환",
    description: "바이트, KB, MB, GB, TB 등 데이터 용량 변환",
    category: "convert",
    path: "/data",
    icon: "HardDrive",
  },

  // ─── Life ─────────────────────────────────────────────────────────
  {
    id: "electricity",
    name: "전기요금 계산기",
    description: "한국전력 누진세 반영 전기요금 계산",
    category: "life",
    path: "/life/electricity",
    icon: "Zap",
  },
  {
    id: "gpa",
    name: "학점 계산기",
    description: "대학교 학점(GPA) 계산",
    category: "life",
    path: "/life/gpa",
    icon: "GraduationCap",
  },
  {
    id: "percentage",
    name: "퍼센트 계산기",
    description: "퍼센트 증가/감소, 비율 계산",
    category: "life",
    path: "/life/percentage",
    icon: "Percent",
  },
  {
    id: "discount",
    name: "할인율 계산기",
    description: "할인가, 할인율, 원래 가격 계산",
    category: "life",
    path: "/life/discount",
    icon: "Tag",
  },
];

export function getToolsByCategory(categoryId: CategoryId): Tool[] {
  return tools.filter((t) => t.category === categoryId);
}

export function getPopularTools(): Tool[] {
  return tools.filter((t) => t.popular);
}

export function getCategoryById(id: CategoryId): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return tools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q)
  );
}
