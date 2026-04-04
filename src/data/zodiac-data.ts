export interface ZodiacSign {
  id: string;
  name: string;
  emoji: string;
  element: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  dateRange: string;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { id: "aries", name: "양자리", emoji: "\u2648", element: "불", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19, dateRange: "3/21 ~ 4/19" },
  { id: "taurus", name: "황소자리", emoji: "\u2649", element: "흙", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, dateRange: "4/20 ~ 5/20" },
  { id: "gemini", name: "쌍둥이자리", emoji: "\u264A", element: "바람", startMonth: 5, startDay: 21, endMonth: 6, endDay: 21, dateRange: "5/21 ~ 6/21" },
  { id: "cancer", name: "게자리", emoji: "\u264B", element: "물", startMonth: 6, startDay: 22, endMonth: 7, endDay: 22, dateRange: "6/22 ~ 7/22" },
  { id: "leo", name: "사자자리", emoji: "\u264C", element: "불", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, dateRange: "7/23 ~ 8/22" },
  { id: "virgo", name: "처녀자리", emoji: "\u264D", element: "흙", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, dateRange: "8/23 ~ 9/22" },
  { id: "libra", name: "천칭자리", emoji: "\u264E", element: "바람", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22, dateRange: "9/23 ~ 10/22" },
  { id: "scorpio", name: "전갈자리", emoji: "\u264F", element: "물", startMonth: 10, startDay: 23, endMonth: 11, endDay: 21, dateRange: "10/23 ~ 11/21" },
  { id: "sagittarius", name: "사수자리", emoji: "\u2650", element: "불", startMonth: 11, startDay: 22, endMonth: 12, endDay: 21, dateRange: "11/22 ~ 12/21" },
  { id: "capricorn", name: "염소자리", emoji: "\u2651", element: "흙", startMonth: 12, startDay: 22, endMonth: 1, endDay: 19, dateRange: "12/22 ~ 1/19" },
  { id: "aquarius", name: "물병자리", emoji: "\u2652", element: "바람", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, dateRange: "1/20 ~ 2/18" },
  { id: "pisces", name: "물고기자리", emoji: "\u2653", element: "물", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, dateRange: "2/19 ~ 3/20" },
];

export function getSignByDate(month: number, day: number): ZodiacSign {
  for (const sign of ZODIAC_SIGNS) {
    const { startMonth: sm, startDay: sd, endMonth: em, endDay: ed } = sign;
    if (sm <= em) {
      if ((month === sm && day >= sd) || (month === em && day <= ed) || (month > sm && month < em)) return sign;
    } else {
      if ((month === sm && day >= sd) || (month === em && day <= ed) || month > sm || month < em) return sign;
    }
  }
  return ZODIAC_SIGNS[9]; // capricorn fallback
}

const FORTUNE_TEXTS = {
  overall: [
    "활기찬 에너지가 넘치는 하루입니다. 새로운 도전에 적극적으로 나서보세요.",
    "차분하게 계획을 세우면 좋은 결과를 얻을 수 있는 날입니다.",
    "주변 사람들과의 소통이 행운을 가져다주는 하루입니다.",
    "직감을 믿고 행동하면 예상치 못한 좋은 결과가 있을 것입니다.",
    "작은 변화가 큰 차이를 만들어내는 날입니다. 디테일에 주목하세요.",
    "하던 일이 순조롭게 풀리는 긍정적인 하루가 될 것입니다.",
    "새로운 만남이나 기회가 찾아올 수 있으니 열린 마음을 유지하세요.",
    "꾸준히 노력해온 일이 결실을 맺기 시작하는 시기입니다.",
    "무리하지 말고 자신의 페이스를 유지하는 것이 중요한 날입니다.",
    "창의적인 아이디어가 빛을 발하는 하루, 메모를 습관화하세요.",
    "예상치 못한 행운이 찾아올 수 있는 날입니다.",
    "조급함을 버리고 여유를 가지면 좋은 기운이 찾아옵니다.",
  ],
  love: [
    "사랑하는 사람과의 대화가 관계를 더욱 깊게 만들어줍니다.",
    "새로운 만남의 기회가 있을 수 있으니 외출을 추천합니다.",
    "연인과 작은 서프라이즈가 큰 감동을 줄 수 있는 날입니다.",
    "솔로라면 자신을 가꾸는 데 집중하면 좋은 인연이 찾아옵니다.",
    "감정 표현에 솔직해지면 관계가 한층 발전할 것입니다.",
    "오해가 생길 수 있으니 명확한 의사소통이 중요합니다.",
    "로맨틱한 분위기를 만들어보세요. 특별한 추억이 될 것입니다.",
    "상대방의 입장에서 생각해보면 갈등이 자연스럽게 해결됩니다.",
    "오늘은 혼자만의 시간을 가지며 감정을 정리하기 좋은 날입니다.",
    "진심어린 한마디가 상대방의 마음을 크게 움직일 수 있습니다.",
    "과거의 인연에서 벗어나고 새로운 시작을 준비해보세요.",
    "함께하는 시간을 소중히 여기면 사랑이 더욱 깊어집니다.",
  ],
  money: [
    "재정적으로 안정적인 하루입니다. 저축을 시작하기 좋은 때입니다.",
    "충동구매를 조심하세요. 계획에 없는 지출은 피하는 것이 좋습니다.",
    "투자에 대한 좋은 정보를 얻을 수 있는 날입니다.",
    "예상치 못한 수입이 생길 수 있는 행운의 날입니다.",
    "장기적인 재정 계획을 세우기에 적합한 시기입니다.",
    "지인의 금전 요청에 신중하게 대처하세요.",
    "그동안 아끼던 것에 투자하면 좋은 결과가 있을 것입니다.",
    "부수입의 기회가 보인다면 적극적으로 도전해보세요.",
    "절약의 습관이 미래의 큰 자산이 됩니다.",
    "재테크에 관심을 가져보세요. 좋은 상품을 발견할 수 있습니다.",
    "오늘은 큰 지출을 피하고 소소한 행복에 투자하세요.",
    "금전운이 상승하는 시기, 기회를 놓치지 마세요.",
  ],
  health: [
    "규칙적인 운동이 활력을 불어넣어줄 것입니다.",
    "충분한 수면이 필요한 날입니다. 일찍 잠자리에 드세요.",
    "스트레칭으로 하루를 시작하면 컨디션이 좋아질 것입니다.",
    "과식을 조심하세요. 가벼운 식사가 건강에 도움이 됩니다.",
    "야외 활동이 기분 전환에 큰 도움이 되는 날입니다.",
    "수분 섭취를 충분히 하면 피로가 줄어들 것입니다.",
    "명상이나 요가로 마음의 평화를 찾아보세요.",
    "비타민 섭취에 신경 쓰면 면역력이 향상될 것입니다.",
    "오래 앉아있지 말고 자주 일어나 움직이세요.",
    "오늘은 건강검진을 예약하기 좋은 날입니다.",
    "긍정적인 마인드가 건강의 첫걸음입니다.",
    "무리한 운동보다 꾸준한 걷기가 더 효과적입니다.",
  ],
};

const LUCKY_COLORS = ["빨강", "파랑", "초록", "노랑", "보라", "분홍", "주황", "하늘색", "흰색", "검정", "금색", "은색"];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export interface DailyFortune {
  overall: { stars: number; text: string };
  love: { stars: number; text: string };
  money: { stars: number; text: string };
  health: { stars: number; text: string };
  luckyNumber: number;
  luckyColor: string;
}

export function getDailyFortune(signId: string, date: Date): DailyFortune {
  const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const seed = hash(`${signId}-${dateStr}`);

  const pick = (arr: string[], offset: number) => arr[(seed + offset) % arr.length];
  const stars = (offset: number) => ((seed + offset) % 5) + 1;

  return {
    overall: { stars: stars(1), text: pick(FORTUNE_TEXTS.overall, 2) },
    love: { stars: stars(3), text: pick(FORTUNE_TEXTS.love, 4) },
    money: { stars: stars(5), text: pick(FORTUNE_TEXTS.money, 6) },
    health: { stars: stars(7), text: pick(FORTUNE_TEXTS.health, 8) },
    luckyNumber: (seed % 99) + 1,
    luckyColor: LUCKY_COLORS[seed % LUCKY_COLORS.length],
  };
}
