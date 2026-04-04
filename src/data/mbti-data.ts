export const MBTI_TYPES = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP",
] as const;

export interface MBTIInfo {
  type: string;
  nickname: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
}

export const mbtiInfo: Record<string, MBTIInfo> = {
  INTJ: { type: "INTJ", nickname: "전략가", description: "독립적이고 분석적인 전략가. 장기적인 비전을 세우고 체계적으로 실행합니다.", strengths: ["전략적 사고", "독립적 실행력", "높은 기준과 목표"], weaknesses: ["감정 표현 서툼", "지나친 완벽주의", "타인에게 냉정해 보임"] },
  INTP: { type: "INTP", nickname: "논리술사", description: "호기심 많은 사색가. 복잡한 문제를 논리적으로 분석하고 독창적 해결책을 찾습니다.", strengths: ["뛰어난 분석력", "창의적 문제해결", "지적 호기심"], weaknesses: ["실행력 부족", "사교성 낮음", "감정 공감 어려움"] },
  ENTJ: { type: "ENTJ", nickname: "통솔자", description: "카리스마 넘치는 리더. 효율적으로 조직을 이끌고 목표를 달성합니다.", strengths: ["강력한 리더십", "결단력", "효율적 조직력"], weaknesses: ["지나친 통제욕", "감정 무시 경향", "참을성 부족"] },
  ENTP: { type: "ENTP", nickname: "변론가", description: "재치 있고 영리한 토론가. 새로운 아이디어와 가능성을 끊임없이 탐구합니다.", strengths: ["빠른 두뇌 회전", "언변과 설득력", "혁신적 사고"], weaknesses: ["끈기 부족", "논쟁 좋아함", "일 마무리 약함"] },
  INFJ: { type: "INFJ", nickname: "옹호자", description: "이상주의적이고 통찰력 있는 조력자. 깊은 공감으로 타인을 이해하고 돕습니다.", strengths: ["깊은 공감 능력", "통찰력과 직관", "헌신적 태도"], weaknesses: ["완벽주의 성향", "번아웃 위험", "갈등 회피"] },
  INFP: { type: "INFP", nickname: "중재자", description: "감성적이고 이상을 추구하는 몽상가. 자신만의 가치관을 지키며 세상을 더 나은 곳으로 만들고자 합니다.", strengths: ["풍부한 감수성", "강한 가치관", "창의적 표현력"], weaknesses: ["현실 적응 어려움", "과도한 이상주의", "결정 장애"] },
  ENFJ: { type: "ENFJ", nickname: "선도자", description: "따뜻하고 영향력 있는 리더. 사람들을 이끌며 함께 성장하는 것을 추구합니다.", strengths: ["탁월한 소통 능력", "사람에 대한 이해", "동기부여 능력"], weaknesses: ["타인 승인 욕구", "자기 희생 과다", "지나친 이상화"] },
  ENFP: { type: "ENFP", nickname: "활동가", description: "열정적이고 자유로운 영혼. 새로운 가능성을 탐색하며 사람들에게 영감을 줍니다.", strengths: ["넘치는 열정", "사교성과 친화력", "창의적 발상"], weaknesses: ["집중력 분산", "계획성 부족", "감정 기복"] },
  ISTJ: { type: "ISTJ", nickname: "현실주의자", description: "신뢰할 수 있는 실무자. 규칙을 따르고 책임감 있게 일을 처리합니다.", strengths: ["철저한 책임감", "정확하고 꼼꼼함", "신뢰할 수 있음"], weaknesses: ["변화 거부 경향", "고집스러움", "감정 표현 부족"] },
  ISFJ: { type: "ISFJ", nickname: "수호자", description: "따뜻하고 헌신적인 수호자. 조용히 주변 사람들을 보살피고 안정을 제공합니다.", strengths: ["배려와 친절함", "꼼꼼한 관찰력", "묵묵한 헌신"], weaknesses: ["자기 주장 부족", "변화 두려움", "과도한 책임감"] },
  ESTJ: { type: "ESTJ", nickname: "경영자", description: "실용적이고 체계적인 관리자. 규칙과 질서를 중시하며 효율적으로 일합니다.", strengths: ["뛰어난 조직력", "실행력과 추진력", "책임감 강함"], weaknesses: ["융통성 부족", "권위적 태도", "감정 무시 경향"] },
  ESFJ: { type: "ESFJ", nickname: "집정관", description: "사교적이고 배려 깊은 호스트. 화합을 중시하고 주변 사람들의 행복을 챙깁니다.", strengths: ["뛰어난 사교성", "배려심과 친절함", "실용적 도움"], weaknesses: ["눈치 과다", "타인 평가 민감", "변화 거부 경향"] },
  ISTP: { type: "ISTP", nickname: "장인", description: "냉철하고 분석적인 해결사. 실용적 문제를 능숙하게 다루며 위기에 강합니다.", strengths: ["위기 대처 능력", "실용적 문제해결", "독립적 행동력"], weaknesses: ["감정 표현 서툼", "장기 계획 부족", "무관심해 보임"] },
  ISFP: { type: "ISFP", nickname: "모험가", description: "온화하고 감각적인 예술가. 현재를 즐기며 자유롭고 조화로운 삶을 추구합니다.", strengths: ["예술적 감각", "온화한 성품", "현재 집중력"], weaknesses: ["갈등 회피", "계획 부재", "자기표현 어려움"] },
  ESTP: { type: "ESTP", nickname: "사업가", description: "대담하고 에너지 넘치는 행동파. 지금 이 순간을 최대한 즐기며 기회를 포착합니다.", strengths: ["순발력과 적응력", "대담한 실행력", "사교적 매력"], weaknesses: ["인내심 부족", "장기 계획 약함", "감정 깊이 부족"] },
  ESFP: { type: "ESFP", nickname: "연예인", description: "밝고 유쾌한 엔터테이너. 주변을 즐겁게 하며 삶을 축제처럼 살아갑니다.", strengths: ["밝은 에너지", "뛰어난 사교성", "즉흥적 재능"], weaknesses: ["산만함", "깊이 부족", "감정적 결정"] },
};

export type CompatibilityLevel = "best" | "good" | "neutral" | "bad";

export interface CompatibilityResult {
  level: CompatibilityLevel;
  score: number;
  title: string;
  description: string;
}

// Best matches based on cognitive function theory
const BEST_MATCHES: Record<string, string[]> = {
  INTJ: ["ENFP", "ENTP"], INTP: ["ENTJ", "ENFJ"], ENTJ: ["INTP", "INFP"],
  ENTP: ["INFJ", "INTJ"], INFJ: ["ENTP", "ENFP"], INFP: ["ENTJ", "ENFJ"],
  ENFJ: ["INFP", "INTP"], ENFP: ["INFJ", "INTJ"], ISTJ: ["ESFP", "ESTP"],
  ISFJ: ["ESTP", "ESFP"], ESTJ: ["ISFP", "ISTP"], ESFJ: ["ISTP", "ISFP"],
  ISTP: ["ESFJ", "ESTJ"], ISFP: ["ESTJ", "ESFJ"], ESTP: ["ISFJ", "ISTJ"],
  ESFP: ["ISTJ", "ISFJ"],
};

const GOOD_MATCHES: Record<string, string[]> = {
  INTJ: ["INFJ", "ENTJ", "INTP"], INTP: ["ENTP", "INTJ", "INFJ"],
  ENTJ: ["INTJ", "ENFJ", "ESTJ"], ENTP: ["INTP", "ENFP", "ENTJ"],
  INFJ: ["INFP", "ENFJ", "INTJ"], INFP: ["INFJ", "ENFP", "ISFP"],
  ENFJ: ["ENFP", "INFJ", "ENTJ"], ENFP: ["ENFJ", "INFP", "ENTP"],
  ISTJ: ["ISFJ", "ESTJ", "INTJ"], ISFJ: ["ISTJ", "ESFJ", "INFJ"],
  ESTJ: ["ISTJ", "ENTJ", "ESFJ"], ESFJ: ["ISFJ", "ESTJ", "ENFJ"],
  ISTP: ["ESTP", "INTP", "ISFP"], ISFP: ["ESFP", "INFP", "ISTP"],
  ESTP: ["ISTP", "ESFP", "ENTP"], ESFP: ["ISFP", "ESTP", "ENFP"],
};

const LEVEL_TITLES: Record<CompatibilityLevel, string> = {
  best: "천생연분",
  good: "좋은 궁합",
  neutral: "노력이 필요한 궁합",
  bad: "도전적인 궁합",
};

const DESCRIPTIONS: Record<CompatibilityLevel, string[]> = {
  best: [
    "서로의 부족한 부분을 자연스럽게 채워주는 이상적인 조합입니다. 깊은 이해와 존중을 바탕으로 함께 성장할 수 있습니다.",
    "마치 퍼즐 조각처럼 딱 맞는 관계입니다. 서로 다른 강점이 시너지를 만들어 냅니다.",
  ],
  good: [
    "공통점이 많아 편안한 관계를 유지할 수 있습니다. 서로의 성향을 이해하면 더욱 깊어질 수 있는 관계입니다.",
    "서로 통하는 부분이 많고, 약간의 차이가 관계에 재미를 더합니다. 소통에 노력하면 좋은 파트너가 됩니다.",
  ],
  neutral: [
    "서로 다른 점이 있지만 이해와 배려로 극복할 수 있습니다. 다름을 인정하고 존중하는 것이 핵심입니다.",
    "같은 점과 다른 점이 공존하는 관계입니다. 열린 마음으로 소통하면 서로에게 좋은 영향을 줄 수 있습니다.",
  ],
  bad: [
    "근본적인 가치관이나 생활 방식이 달라 충돌이 있을 수 있습니다. 하지만 이 차이를 극복하면 가장 큰 성장을 이룰 수 있습니다.",
    "서로 이해하기 어려운 부분이 있지만, 그만큼 배울 점도 많습니다. 인내심과 열린 마음이 필요합니다.",
  ],
};

export function getCompatibility(type1: string, type2: string): CompatibilityResult {
  // Same type
  if (type1 === type2) {
    return {
      level: "good",
      score: 72,
      title: "거울 같은 궁합",
      description: "같은 유형끼리는 서로를 깊이 이해할 수 있지만, 비슷한 약점을 공유하기도 합니다. 서로의 성장을 위해 새로운 관점을 제시해줄 수 있는 관계입니다.",
    };
  }

  let level: CompatibilityLevel;
  if (BEST_MATCHES[type1]?.includes(type2) || BEST_MATCHES[type2]?.includes(type1)) {
    level = "best";
  } else if (GOOD_MATCHES[type1]?.includes(type2) || GOOD_MATCHES[type2]?.includes(type1)) {
    level = "good";
  } else {
    // Check if they share 0-1 letters
    const shared = [0, 1, 2, 3].filter((i) => type1[i] === type2[i]).length;
    level = shared <= 1 ? "bad" : "neutral";
  }

  const scoreRanges: Record<CompatibilityLevel, [number, number]> = {
    best: [85, 98],
    good: [65, 84],
    neutral: [40, 64],
    bad: [20, 39],
  };

  const [min, max] = scoreRanges[level];
  // Deterministic score from the pair
  const hash = (type1.charCodeAt(0) + type2.charCodeAt(0) + type1.charCodeAt(3) + type2.charCodeAt(3)) % (max - min + 1);
  const score = min + hash;

  const descs = DESCRIPTIONS[level];
  const descIdx = (type1.charCodeAt(1) + type2.charCodeAt(1)) % descs.length;

  return {
    level,
    score,
    title: LEVEL_TITLES[level],
    description: descs[descIdx],
  };
}
