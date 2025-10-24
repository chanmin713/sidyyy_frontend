// 사이드바 데이터

export interface Project {
  id: string;
  name: string;
  description: string;
  icon: string;
  stats: string;
  trend: 'up' | 'down' | 'stable';
}

export interface Member {
  id: string;
  name: string;
  role: string;
  initial: string;
}

export const popularProjects: Project[] = [
  {
    id: '1',
    name: '플레이포켓',
    description: '게임 가격 비교 서비스',
    icon: 'GitHubLogoIcon',
    stats: '2.1k',
    trend: 'up',
  },
  {
    id: '2',
    name: '디자인 가이드',
    description: 'UI/UX 레퍼런스 모음',
    icon: 'FigmaLogoIcon',
    stats: '1.8k',
    trend: 'up',
  },
  {
    id: '3',
    name: '맥북 가이드',
    description: '개발자용 맥북 추천',
    icon: 'NotionLogoIcon',
    stats: '1.5k',
    trend: 'up',
  },
  {
    id: '4',
    name: '스타트업 로드맵',
    description: '창업 가이드북',
    icon: 'DiscordLogoIcon',
    stats: '1.2k',
    trend: 'up',
  },
];

export const recommendedMembers: Member[] = [
  {
    id: '1',
    name: '김개발',
    role: '프론트엔드 개발자',
    initial: '김',
  },
  {
    id: '2',
    name: '이디자인',
    role: 'UI/UX 디자이너',
    initial: '이',
  },
  {
    id: '3',
    name: '박스타트업',
    role: '스타트업 창업자',
    initial: '박',
  },
];
