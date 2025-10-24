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

export interface PopularLog {
  id: string;
  title: string;
  author: string;
  likes: number;
  comments: number;
  category: string;
}

export interface PopularRecruit {
  id: string;
  title: string;
  company: string;
  position: string;
  applicants: number;
  deadline: string;
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

export const popularLogs: PopularLog[] = [
  {
    id: '1',
    title: 'React 18의 새로운 기능들',
    author: '김개발',
    likes: 42,
    comments: 8,
    category: '프론트엔드',
  },
  {
    id: '2',
    title: 'TypeScript 고급 타입 활용법',
    author: '이타입',
    likes: 38,
    comments: 12,
    category: '프론트엔드',
  },
  {
    id: '3',
    title: 'Next.js 14 App Router 마이그레이션',
    author: '박넥스트',
    likes: 35,
    comments: 6,
    category: '프론트엔드',
  },
  {
    id: '4',
    title: 'Node.js 성능 최적화 팁',
    author: '최백엔드',
    likes: 29,
    comments: 15,
    category: '백엔드',
  },
];

export const popularRecruits: PopularRecruit[] = [
  {
    id: '1',
    title: '프론트엔드 개발자 모집',
    company: '테크스타트업',
    position: '시니어 프론트엔드',
    applicants: 24,
    deadline: '2024-02-15',
  },
  {
    id: '2',
    title: '풀스택 개발자 구인',
    company: '핀테크회사',
    position: '풀스택 개발자',
    applicants: 18,
    deadline: '2024-02-20',
  },
  {
    id: '3',
    title: 'UI/UX 디자이너 채용',
    company: '디자인에이전시',
    position: '시니어 디자이너',
    applicants: 12,
    deadline: '2024-02-18',
  },
  {
    id: '4',
    title: '백엔드 개발자 모집',
    company: '클라우드서비스',
    position: '백엔드 개발자',
    applicants: 16,
    deadline: '2024-02-25',
  },
];
