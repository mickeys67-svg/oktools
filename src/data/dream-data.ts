export type DreamType = "good" | "bad" | "neutral";

export interface DreamSymbol {
  keyword: string;
  meaning: string;
  type: DreamType;
  detail: string;
}

export interface DreamCategory {
  id: string;
  name: string;
  emoji: string;
  symbols: DreamSymbol[];
}

export const DREAM_CATEGORIES: DreamCategory[] = [
  {
    id: "animal",
    name: "동물",
    emoji: "🐾",
    symbols: [
      { keyword: "뱀", meaning: "재물운 상승", type: "good", detail: "뱀이 나타나는 꿈은 재물이 들어올 조짐입니다. 특히 큰 뱀일수록 큰 재물을 의미합니다." },
      { keyword: "돼지", meaning: "행운과 풍요", type: "good", detail: "돼지는 복과 재물의 상징입니다. 돼지꿈을 꾸면 로또를 사보는 것도 좋습니다." },
      { keyword: "호랑이", meaning: "권위와 성공", type: "good", detail: "호랑이는 권위와 힘을 상징합니다. 승진이나 시험 합격의 길몽입니다." },
      { keyword: "용", meaning: "대길, 큰 행운", type: "good", detail: "용꿈은 최고의 길몽으로, 큰 성공이나 귀인의 등장을 의미합니다." },
      { keyword: "물고기", meaning: "재물과 기회", type: "good", detail: "물고기를 잡는 꿈은 재물을 얻거나 좋은 기회가 찾아옴을 의미합니다." },
      { keyword: "강아지", meaning: "우정과 충성", type: "neutral", detail: "강아지는 주변 사람과의 관계를 나타냅니다. 친구나 동료와의 관계에 변화가 있을 수 있습니다." },
      { keyword: "고양이", meaning: "배신 주의", type: "bad", detail: "고양이는 주변의 시기나 질투를 의미할 수 있습니다. 인간관계에 주의하세요." },
      { keyword: "까마귀", meaning: "흉조, 근심", type: "bad", detail: "까마귀는 좋지 않은 소식이나 근심 걱정을 암시합니다. 건강 관리에 신경 쓰세요." },
      { keyword: "말", meaning: "전진과 활력", type: "good", detail: "말을 타는 꿈은 목표를 향해 힘차게 전진함을 의미합니다." },
      { keyword: "새", meaning: "자유와 소식", type: "neutral", detail: "새는 자유와 소식을 상징합니다. 멀리서 좋은 소식이 올 수 있습니다." },
    ],
  },
  {
    id: "person",
    name: "사람",
    emoji: "👥",
    symbols: [
      { keyword: "돌아가신 분", meaning: "조언과 그리움", type: "neutral", detail: "돌아가신 분이 나타나는 꿈은 그분의 보살핌이나 중요한 메시지를 전달하려는 의미입니다." },
      { keyword: "아기", meaning: "새로운 시작", type: "good", detail: "아기는 새로운 시작, 창조, 가능성을 상징합니다. 새로운 프로젝트나 관계의 시작을 의미합니다." },
      { keyword: "연인", meaning: "감정의 변화", type: "neutral", detail: "연인이 등장하는 꿈은 현재 감정 상태의 반영이거나 관계의 변화를 암시합니다." },
      { keyword: "가족", meaning: "화합과 안정", type: "good", detail: "가족이 함께하는 꿈은 가정의 화목과 안정을 의미합니다." },
      { keyword: "낯선 사람", meaning: "새로운 만남", type: "neutral", detail: "낯선 사람은 아직 만나지 못한 자신의 다른 면이나 새로운 인연을 상징합니다." },
      { keyword: "유명인", meaning: "인정과 성취 욕구", type: "neutral", detail: "유명인이 등장하는 꿈은 인정받고 싶은 욕구나 높은 목표를 반영합니다." },
      { keyword: "친구", meaning: "사회적 관계", type: "neutral", detail: "친구가 나오는 꿈은 현재 인간관계에 대한 무의식적 생각을 반영합니다." },
      { keyword: "선생님", meaning: "지혜와 교훈", type: "good", detail: "선생님은 인생의 교훈이나 중요한 깨달음을 얻게 될 것을 암시합니다." },
    ],
  },
  {
    id: "nature",
    name: "자연",
    emoji: "🌿",
    symbols: [
      { keyword: "물", meaning: "감정과 무의식", type: "neutral", detail: "맑은 물은 긍정적 감정을, 탁한 물은 불안이나 혼란을 의미합니다." },
      { keyword: "불", meaning: "열정과 변화", type: "neutral", detail: "불은 열정, 에너지, 변화를 상징합니다. 상황에 따라 길몽일 수도, 경고일 수도 있습니다." },
      { keyword: "산", meaning: "목표와 도전", type: "good", detail: "산을 오르는 꿈은 목표를 향해 나아가고 있음을 의미합니다. 정상에 오르면 성공을 암시합니다." },
      { keyword: "꽃", meaning: "행복과 아름다움", type: "good", detail: "꽃은 기쁨, 사랑, 아름다움을 상징합니다. 좋은 일이 찾아올 조짐입니다." },
      { keyword: "비", meaning: "정화와 새로움", type: "neutral", detail: "비는 감정의 정화와 새로운 시작을 의미합니다. 고민이 해결될 수 있습니다." },
      { keyword: "눈", meaning: "순수와 고독", type: "neutral", detail: "눈은 순수함과 새 출발을 의미하지만, 때로는 외로움이나 냉담함을 나타내기도 합니다." },
      { keyword: "바다", meaning: "무한한 가능성", type: "good", detail: "넓은 바다는 무한한 가능성과 자유를 상징합니다. 새로운 도전을 두려워하지 마세요." },
      { keyword: "지진", meaning: "큰 변화 예고", type: "bad", detail: "지진은 생활에 큰 변화가 찾아올 것을 암시합니다. 마음의 준비를 하세요." },
    ],
  },
  {
    id: "food",
    name: "음식",
    emoji: "🍚",
    symbols: [
      { keyword: "떡", meaning: "경사와 잔치", type: "good", detail: "떡은 경사스러운 일이 생길 것을 의미합니다. 축하할 일이 곧 찾아옵니다." },
      { keyword: "과일", meaning: "성과와 결실", type: "good", detail: "과일은 노력의 결실을 상징합니다. 특히 잘 익은 과일은 큰 성과를 의미합니다." },
      { keyword: "밥", meaning: "풍요와 안정", type: "good", detail: "밥을 먹는 꿈은 생활의 풍요로움과 안정을 의미합니다." },
      { keyword: "고기", meaning: "에너지와 활력", type: "good", detail: "고기를 먹는 꿈은 건강과 활력이 넘치게 될 것을 의미합니다." },
      { keyword: "술", meaning: "사교와 주의", type: "neutral", detail: "술은 사교적 관계를 의미하지만, 과음은 판단력 저하를 경고합니다." },
      { keyword: "물 마시기", meaning: "갈증 해소", type: "good", detail: "시원한 물을 마시는 꿈은 고민이 해결되거나 소원이 이루어짐을 의미합니다." },
    ],
  },
  {
    id: "vehicle",
    name: "탈것",
    emoji: "🚗",
    symbols: [
      { keyword: "자동차", meaning: "인생의 방향", type: "neutral", detail: "자동차는 인생의 방향과 속도를 상징합니다. 운전하는 꿈은 자기 주도적인 삶을 의미합니다." },
      { keyword: "비행기", meaning: "높은 이상과 도약", type: "good", detail: "비행기는 높은 목표와 도약을 상징합니다. 해외 관련 좋은 소식이 있을 수 있습니다." },
      { keyword: "배", meaning: "인생 여정", type: "neutral", detail: "배는 인생의 여정을 상징합니다. 순항하는 배는 순조로운 삶을 의미합니다." },
      { keyword: "기차", meaning: "정해진 길", type: "neutral", detail: "기차는 정해진 경로를 따라가는 삶을 상징합니다. 계획대로 진행될 것입니다." },
      { keyword: "자전거", meaning: "균형과 노력", type: "neutral", detail: "자전거는 삶의 균형과 꾸준한 노력을 상징합니다." },
      { keyword: "엘리베이터", meaning: "급격한 변화", type: "neutral", detail: "올라가면 상승운, 내려가면 하락의 의미. 갇히는 꿈은 답답한 현실을 반영합니다." },
    ],
  },
  {
    id: "place",
    name: "장소",
    emoji: "🏠",
    symbols: [
      { keyword: "집", meaning: "자아와 안정", type: "neutral", detail: "집은 자신의 내면과 안정감을 상징합니다. 새 집은 새로운 시작을 의미합니다." },
      { keyword: "학교", meaning: "배움과 성장", type: "neutral", detail: "학교는 배움, 성장, 과거의 경험을 상징합니다. 무언가를 배워야 할 시기입니다." },
      { keyword: "병원", meaning: "치유와 건강", type: "neutral", detail: "병원은 치유가 필요하거나 건강에 신경 써야 함을 알려줍니다." },
      { keyword: "화장실", meaning: "정화와 해소", type: "good", detail: "화장실은 불필요한 것을 버리고 정화하는 것을 의미합니다. 고민 해결의 길몽입니다." },
      { keyword: "높은 곳", meaning: "성취와 두려움", type: "neutral", detail: "높은 곳에 서 있는 꿈은 성취감이나 불안감을 반영합니다." },
      { keyword: "바닷가", meaning: "휴식과 자유", type: "good", detail: "바닷가는 마음의 안정과 자유를 찾고 싶은 욕구를 반영합니다." },
    ],
  },
  {
    id: "action",
    name: "행동",
    emoji: "🏃",
    symbols: [
      { keyword: "떨어지다", meaning: "불안과 스트레스", type: "bad", detail: "떨어지는 꿈은 현실에서의 불안감이나 통제력 상실을 반영합니다." },
      { keyword: "날다", meaning: "자유와 해방", type: "good", detail: "하늘을 나는 꿈은 자유로움과 현실의 제약에서 벗어나고 싶은 욕구를 의미합니다." },
      { keyword: "쫓기다", meaning: "회피와 스트레스", type: "bad", detail: "쫓기는 꿈은 현실에서 피하고 싶은 문제나 스트레스가 있음을 나타냅니다." },
      { keyword: "싸우다", meaning: "갈등과 대립", type: "neutral", detail: "싸우는 꿈은 내면의 갈등이나 주변과의 대립을 반영합니다." },
      { keyword: "울다", meaning: "감정 해소", type: "neutral", detail: "울고 나면 개운해지듯, 꿈에서 우는 것은 감정의 정화와 해소를 의미합니다." },
      { keyword: "웃다", meaning: "기쁨의 예고", type: "good", detail: "꿈에서 즐겁게 웃는 것은 좋은 일이 곧 찾아올 것을 암시합니다." },
      { keyword: "수영하다", meaning: "감정 탐색", type: "neutral", detail: "수영은 자신의 감정을 탐색하고 있음을 의미합니다." },
      { keyword: "시험 보다", meaning: "자기 평가", type: "neutral", detail: "시험꿈은 자신에 대한 평가나 불안감을 반영합니다. 준비가 필요하다는 신호일 수 있습니다." },
    ],
  },
  {
    id: "object",
    name: "물건",
    emoji: "💎",
    symbols: [
      { keyword: "돈", meaning: "가치와 자존감", type: "good", detail: "돈을 줍는 꿈은 예상치 못한 행운을, 잃는 꿈은 손실 주의를 의미합니다." },
      { keyword: "반지", meaning: "약속과 헌신", type: "good", detail: "반지는 사랑의 약속, 결혼, 소중한 관계를 상징합니다." },
      { keyword: "칼", meaning: "결단과 단절", type: "neutral", detail: "칼은 결단력이나 관계의 단절을 상징합니다. 중요한 결정의 시기일 수 있습니다." },
      { keyword: "거울", meaning: "자기 성찰", type: "neutral", detail: "거울은 자기 자신을 돌아보라는 의미입니다. 내면을 살펴볼 때입니다." },
      { keyword: "열쇠", meaning: "해결과 기회", type: "good", detail: "열쇠는 문제 해결의 실마리나 새로운 기회를 상징합니다." },
      { keyword: "신발", meaning: "사회적 지위", type: "neutral", detail: "새 신발은 새로운 출발을, 낡은 신발은 현재 상황의 피로를 의미합니다." },
    ],
  },
  {
    id: "number",
    name: "숫자/색상",
    emoji: "🔢",
    symbols: [
      { keyword: "3", meaning: "조화와 창조", type: "good", detail: "3은 조화, 창조, 완성을 상징하는 길한 숫자입니다." },
      { keyword: "7", meaning: "행운의 숫자", type: "good", detail: "7은 행운, 영적 성장, 직감을 상징합니다." },
      { keyword: "8", meaning: "풍요와 무한", type: "good", detail: "8은 풍요, 성공, 무한한 가능성을 상징합니다." },
      { keyword: "빨간색", meaning: "열정과 에너지", type: "neutral", detail: "빨간색은 강한 에너지, 열정, 사랑을 상징합니다." },
      { keyword: "하얀색", meaning: "순수와 새 시작", type: "good", detail: "하얀색은 순수함, 깨끗한 새 시작을 의미합니다." },
      { keyword: "검은색", meaning: "미지와 두려움", type: "neutral", detail: "검은색은 미지의 세계, 무의식, 또는 두려움을 상징합니다." },
    ],
  },
  {
    id: "etc",
    name: "기타",
    emoji: "✨",
    symbols: [
      { keyword: "이빨 빠지다", meaning: "변화와 상실", type: "bad", detail: "이빨이 빠지는 꿈은 가까운 사람과의 이별이나 건강 악화를 경고합니다." },
      { keyword: "결혼", meaning: "새로운 결합", type: "good", detail: "결혼은 새로운 시작, 관계의 발전, 인생의 전환점을 의미합니다." },
      { keyword: "죽음", meaning: "재탄생과 변화", type: "neutral", detail: "죽음의 꿈은 역설적으로 새로운 시작과 변화를 상징합니다. 두려워할 필요 없습니다." },
      { keyword: "임신", meaning: "창조와 성장", type: "good", detail: "임신은 새로운 아이디어, 프로젝트, 가능성의 잉태를 상징합니다." },
      { keyword: "시험", meaning: "자기 검증", type: "neutral", detail: "시험에 대한 꿈은 자신의 능력에 대한 불안이나 검증 욕구를 반영합니다." },
      { keyword: "길을 잃다", meaning: "방향 상실", type: "bad", detail: "길을 잃는 꿈은 현재 인생의 방향에 대한 혼란을 반영합니다." },
      { keyword: "늦다", meaning: "기회 놓침 불안", type: "neutral", detail: "지각하는 꿈은 기회를 놓칠까 봐 불안해하는 심리를 반영합니다." },
      { keyword: "벌거벗다", meaning: "노출 불안", type: "bad", detail: "알몸인 꿈은 자신의 약점이나 비밀이 드러날까 봐 불안해하는 심리입니다." },
    ],
  },
];

export function searchDreams(query: string): DreamSymbol[] {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  const results: DreamSymbol[] = [];
  for (const cat of DREAM_CATEGORIES) {
    for (const sym of cat.symbols) {
      if (sym.keyword.includes(q) || sym.meaning.includes(q) || sym.detail.includes(q)) {
        results.push(sym);
      }
    }
  }
  return results;
}
