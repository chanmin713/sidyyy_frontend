// 사이드바 데이터

export interface SidebarProject {
  id: string;
  name: string;
  description: string;
  icon: string;
  stats: string;
  trend: 'up' | 'down' | 'stable';
}

export interface SidebarMember {
  id: string;
  name: string;
  role: string;
  initial: string;
}

export interface SidebarLog {
  id: string;
  title: string;
  author: string;
  category: string;
  likes: number;
  comments: number;
}

export interface SidebarRecruit {
  id: string;
  title: string;
  company: string;
  position: string;
  applicants: number;
  deadline: string;
}

export const popularProjects: SidebarProject[] = [
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

export const recommendedMembers: SidebarMember[] = [
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
  {
    id: '4',
    name: '최백엔드',
    role: '백엔드 개발자',
    initial: '최',
  },
  {
    id: '5',
    name: '정풀스택',
    role: '풀스택 개발자',
    initial: '정',
  },
  {
    id: '6',
    name: '한데이터',
    role: '데이터 사이언티스트',
    initial: '한',
  },
  {
    id: '7',
    name: '윤모바일',
    role: '모바일 개발자',
    initial: '윤',
  },
  {
    id: '8',
    name: '강데브옵스',
    role: 'DevOps 엔지니어',
    initial: '강',
  },
  {
    id: '9',
    name: '임AI',
    role: 'AI/ML 엔지니어',
    initial: '임',
  },
  {
    id: '10',
    name: '조보안',
    role: '보안 엔지니어',
    initial: '조',
  },
];

export const popularLogs: SidebarLog[] = [
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
  {
    id: '5',
    title: 'Vue 3 Composition API 완벽 가이드',
    author: '정뷰',
    likes: 31,
    comments: 9,
    category: '프론트엔드',
  },
  {
    id: '6',
    title: 'Docker 컨테이너 최적화 전략',
    author: '강도커',
    likes: 27,
    comments: 11,
    category: 'DevOps',
  },
  {
    id: '7',
    title: 'Python FastAPI로 API 서버 구축하기',
    author: '한파이썬',
    likes: 25,
    comments: 7,
    category: '백엔드',
  },
  {
    id: '8',
    title: 'AWS Lambda 서버리스 아키텍처',
    author: '윤클라우드',
    likes: 23,
    comments: 13,
    category: '클라우드',
  },
  {
    id: '9',
    title: 'GraphQL vs REST API 비교 분석',
    author: '임API',
    likes: 21,
    comments: 5,
    category: '백엔드',
  },
  {
    id: '10',
    title: 'React Native 앱 성능 최적화',
    author: '조모바일',
    likes: 19,
    comments: 8,
    category: '모바일',
  },
];

export const popularRecruits: SidebarRecruit[] = [
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
  {
    id: '5',
    title: 'DevOps 엔지니어 채용',
    company: '클라우드플랫폼',
    position: 'DevOps 엔지니어',
    applicants: 14,
    deadline: '2024-02-22',
  },
  {
    id: '6',
    title: '데이터 사이언티스트 모집',
    company: 'AI스타트업',
    position: '시니어 데이터 사이언티스트',
    applicants: 20,
    deadline: '2024-02-28',
  },
  {
    id: '7',
    title: '모바일 앱 개발자 구인',
    company: '핀테크회사',
    position: 'iOS/Android 개발자',
    applicants: 15,
    deadline: '2024-02-26',
  },
  {
    id: '8',
    title: 'AI/ML 엔지니어 채용',
    company: '헬스케어테크',
    position: '머신러닝 엔지니어',
    applicants: 22,
    deadline: '2024-03-01',
  },
  {
    id: '9',
    title: '보안 엔지니어 모집',
    company: '금융회사',
    position: '시큐리티 엔지니어',
    applicants: 11,
    deadline: '2024-02-24',
  },
  {
    id: '10',
    title: '프로덕트 매니저 구인',
    company: '이커머스플랫폼',
    position: '시니어 PM',
    applicants: 19,
    deadline: '2024-02-29',
  },
];
