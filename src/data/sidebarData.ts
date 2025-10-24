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
    name: 'Sidyyy',
    description: '개발자 커뮤니티 플랫폼',
    icon: 'GitHubLogoIcon',
    stats: '2.1k',
    trend: 'up',
  },
  {
    id: '2',
    name: 'DevTools',
    description: '개발자 도구 모음',
    icon: 'FigmaLogoIcon',
    stats: '1.8k',
    trend: 'up',
  },
  {
    id: '3',
    name: 'CodeShare',
    description: '코드 공유 플랫폼',
    icon: 'NotionLogoIcon',
    stats: '1.5k',
    trend: 'up',
  },
  {
    id: '4',
    name: 'TechBlog',
    description: '기술 블로그 플랫폼',
    icon: 'DiscordLogoIcon',
    stats: '1.2k',
    trend: 'up',
  },
  {
    id: '5',
    name: 'Sidyyy',
    description:
      '개발자 커뮤니티 플랫폼입니다. 개발자들이 프로젝트를 공유하고 협업할 수 있는 공간을 제공합니다.',
    icon: 'GitHubLogoIcon',
    stats: '2.4k',
    trend: 'up',
  },
  {
    id: '6',
    name: 'DevTools',
    description:
      '개발자 도구 모음 프로젝트입니다. 다양한 개발 도구들을 한 곳에서 관리하고 공유할 수 있습니다.',
    icon: 'FigmaLogoIcon',
    stats: '1.9k',
    trend: 'up',
  },
  {
    id: '7',
    name: 'CodeShare',
    description:
      '코드 공유 플랫폼입니다. 개발자들이 코드 스니펫을 공유하고 학습할 수 있는 커뮤니티입니다.',
    icon: 'NotionLogoIcon',
    stats: '1.6k',
    trend: 'up',
  },
  {
    id: '8',
    name: 'TechBlog',
    description:
      '기술 블로그 플랫폼입니다. 개발자들이 기술 경험과 지식을 공유할 수 있는 블로그 서비스입니다.',
    icon: 'DiscordLogoIcon',
    stats: '1.3k',
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
