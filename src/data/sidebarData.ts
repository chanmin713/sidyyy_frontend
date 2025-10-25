// 사이드바 데이터

export interface SidebarProject {
  id: string;
  name: string;
  description: string;
  icon: string;
  stats: {
    likes: number;
    upvotes: number;
    views: number;
    followers: number;
  };
  trend: 'up' | 'down' | 'stable';
}

export interface SidebarMember {
  id: string;
  name: string;
  role: string;
  initial: string;
  bio: string;
  stats: {
    followers: number;
    projects: number;
    likes: number;
    experience: string;
  };
}

export interface SidebarLog {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  category: string;
  content: string;
  stats: {
    likes: number;
    upvotes: number;
    comments: number;
    views: number;
  };
}

export const popularProjects: SidebarProject[] = [
  {
    id: '1',
    name: 'Sidyyy',
    description: '개발자 커뮤니티 플랫폼',
    icon: 'GitHubLogoIcon',
    stats: {
      likes: 2100,
      upvotes: 1800,
      views: 15400,
      followers: 320,
    },
    trend: 'up',
  },
  {
    id: '2',
    name: 'DevTools',
    description: '개발자 도구 모음',
    icon: 'FigmaLogoIcon',
    stats: {
      likes: 1800,
      upvotes: 1500,
      views: 12800,
      followers: 280,
    },
    trend: 'up',
  },
  {
    id: '3',
    name: 'CodeShare',
    description: '코드 공유 플랫폼',
    icon: 'NotionLogoIcon',
    stats: {
      likes: 1500,
      upvotes: 1200,
      views: 9800,
      followers: 240,
    },
    trend: 'up',
  },
  {
    id: '4',
    name: 'TechBlog',
    description: '기술 블로그 플랫폼',
    icon: 'DiscordLogoIcon',
    stats: {
      likes: 1200,
      upvotes: 900,
      views: 7600,
      followers: 190,
    },
    trend: 'up',
  },
  {
    id: '5',
    name: 'Sidyyy',
    description:
      '개발자 커뮤니티 플랫폼입니다. 개발자들이 프로젝트를 공유하고 협업할 수 있는 공간을 제공합니다.',
    icon: 'GitHubLogoIcon',
    stats: {
      likes: 2400,
      upvotes: 2000,
      views: 18200,
      followers: 380,
    },
    trend: 'up',
  },
  {
    id: '6',
    name: 'DevTools',
    description:
      '개발자 도구 모음 프로젝트입니다. 다양한 개발 도구들을 한 곳에서 관리하고 공유할 수 있습니다.',
    icon: 'FigmaLogoIcon',
    stats: {
      likes: 1900,
      upvotes: 1600,
      views: 14200,
      followers: 310,
    },
    trend: 'up',
  },
  {
    id: '7',
    name: 'CodeShare',
    description:
      '코드 공유 플랫폼입니다. 개발자들이 코드 스니펫을 공유하고 학습할 수 있는 커뮤니티입니다.',
    icon: 'NotionLogoIcon',
    stats: {
      likes: 1600,
      upvotes: 1300,
      views: 11200,
      followers: 270,
    },
    trend: 'up',
  },
  {
    id: '8',
    name: 'TechBlog',
    description:
      '기술 블로그 플랫폼입니다. 개발자들이 기술 경험과 지식을 공유할 수 있는 블로그 서비스입니다.',
    icon: 'DiscordLogoIcon',
    stats: {
      likes: 1300,
      upvotes: 1000,
      views: 8900,
      followers: 220,
    },
    trend: 'up',
  },
];

export const recommendedMembers: SidebarMember[] = [
  {
    id: '1',
    name: '김개발',
    role: '프론트엔드 개발자',
    initial: '김',
    bio: 'React와 TypeScript를 주로 사용하는 프론트엔드 개발자입니다. 사용자 경험을 중시하며, 성능 최적화와 접근성에 관심이 많습니다.',
    stats: {
      followers: 1250,
      projects: 8,
      likes: 3200,
      experience: '5년',
    },
  },
  {
    id: '2',
    name: '이디자인',
    role: 'UI/UX 디자이너',
    initial: '이',
    bio: '사용자 중심의 디자인을 추구하는 UI/UX 디자이너입니다. Figma와 Adobe Creative Suite를 활용하여 직관적이고 아름다운 인터페이스를 만듭니다.',
    stats: {
      followers: 980,
      projects: 12,
      likes: 2800,
      experience: '4년',
    },
  },
  {
    id: '3',
    name: '박스타트업',
    role: '스타트업 창업자',
    initial: '박',
    bio: '혁신적인 아이디어로 세상을 바꾸고 싶은 스타트업 창업자입니다. 기술과 비즈니스를 연결하여 사용자에게 가치를 제공하는 서비스를 만듭니다.',
    stats: {
      followers: 2100,
      projects: 3,
      likes: 4500,
      experience: '7년',
    },
  },
  {
    id: '4',
    name: '최백엔드',
    role: '백엔드 개발자',
    initial: '최',
    bio: 'Node.js와 Python을 활용한 백엔드 개발자입니다. 확장 가능하고 안정적인 서버 아키텍처 구축에 전문성을 가지고 있습니다.',
    stats: {
      followers: 1100,
      projects: 6,
      likes: 2900,
      experience: '6년',
    },
  },
  {
    id: '5',
    name: '정풀스택',
    role: '풀스택 개발자',
    initial: '정',
    bio: '프론트엔드부터 백엔드까지 전체 스택을 다루는 풀스택 개발자입니다. React, Node.js, AWS를 활용하여 완전한 웹 애플리케이션을 구축합니다.',
    stats: {
      followers: 1350,
      projects: 10,
      likes: 3600,
      experience: '5년',
    },
  },
  {
    id: '6',
    name: '한데이터',
    role: '데이터 사이언티스트',
    initial: '한',
    bio: 'Python과 R을 활용한 데이터 분석과 머신러닝 모델 개발을 전문으로 하는 데이터 사이언티스트입니다. 비즈니스 인사이트 도출에 집중합니다.',
    stats: {
      followers: 850,
      projects: 5,
      likes: 2200,
      experience: '3년',
    },
  },
  {
    id: '7',
    name: '윤모바일',
    role: '모바일 개발자',
    initial: '윤',
    bio: 'React Native와 Flutter를 활용한 크로스플랫폼 모바일 앱 개발자입니다. 네이티브 성능과 사용자 경험을 모두 고려한 앱을 만듭니다.',
    stats: {
      followers: 920,
      projects: 7,
      likes: 2400,
      experience: '4년',
    },
  },
  {
    id: '8',
    name: '강데브옵스',
    role: 'DevOps 엔지니어',
    initial: '강',
    bio: 'AWS와 Kubernetes를 활용한 클라우드 인프라 구축과 CI/CD 파이프라인 구축을 전문으로 하는 DevOps 엔지니어입니다.',
    stats: {
      followers: 1050,
      projects: 4,
      likes: 2700,
      experience: '6년',
    },
  },
  {
    id: '9',
    name: '임AI',
    role: 'AI/ML 엔지니어',
    initial: '임',
    bio: 'TensorFlow와 PyTorch를 활용한 머신러닝 모델 개발과 딥러닝 연구를 전문으로 하는 AI/ML 엔지니어입니다.',
    stats: {
      followers: 1400,
      projects: 9,
      likes: 3800,
      experience: '5년',
    },
  },
  {
    id: '10',
    name: '조보안',
    role: '보안 엔지니어',
    initial: '조',
    bio: '시스템 보안과 침투 테스트를 전문으로 하는 보안 엔지니어입니다. 취약점 분석과 보안 정책 수립에 경험이 풍부합니다.',
    stats: {
      followers: 780,
      projects: 6,
      likes: 1900,
      experience: '4년',
    },
  },
];

export const popularLogs: SidebarLog[] = [
  {
    id: '1',
    title: 'WebOptimizer #1',
    author: '최성능',
    authorRole: 'PO',
    category: 'Sidyyy',
    content:
      '웹사이트 성능 최적화 프로젝트를 완료했어요! 이미지 WebP 변환, 코드 스플리팅 적용, CDN 도입으로 로딩 시간을 3.2초에서 0.5초로 단축했습니다.',
    stats: {
      likes: 26,
      upvotes: 0,
      comments: 0,
      views: 0,
    },
  },
  {
    id: '2',
    title: 'CatDogAI #1',
    author: '강머신러닝',
    authorRole: 'AI 연구원',
    category: 'Sidyyy',
    content:
      '고양이와 개를 구분하는 모델을 만들어봤어요! CNN 모델을 사용해서 정확도 95%를 달성했고, 실시간 예측도 가능합니다.',
    stats: {
      likes: 25,
      upvotes: 0,
      comments: 0,
      views: 0,
    },
  },
  {
    id: '3',
    title: 'WebPortfolio #1',
    author: '박포트폴리오',
    authorRole: '프론트엔드 개발자',
    category: 'CodeShare',
    content:
      '개인 포트폴리오 웹사이트를 완성했어요! React + TypeScript로 반응형 디자인을 구현하고, Three.js로 3D 요소를 추가했습니다.',
    stats: {
      likes: 23,
      upvotes: 0,
      comments: 0,
      views: 0,
    },
  },
  {
    id: '4',
    title: 'MobileApp #1',
    author: '정모바일',
    authorRole: '모바일 개발자',
    category: 'DevTools',
    content:
      'React Native와 Flutter를 각각 6개월씩 사용해봤는데, 빠른 프로토타이핑은 RN, 성능이 중요한 앱은 Flutter를 추천합니다!',
    stats: {
      likes: 22,
      upvotes: 0,
      comments: 0,
      views: 0,
    },
  },
  {
    id: '5',
    title: 'LeetCode100 #1',
    author: '이알고리즘',
    authorRole: '알고리즘 엔지니어',
    category: 'TechBlog',
    content:
      '드디어 LeetCode 100문제를 풀었어요! 1-20문제는 기본 문법, 21-50문제는 자료구조, 51-80문제는 알고리즘 패턴을 학습했습니다.',
    stats: {
      likes: 21,
      upvotes: 0,
      comments: 0,
      views: 0,
    },
  },
  {
    id: '6',
    title: 'AuthSystem #1',
    author: '윤보안',
    authorRole: '보안 엔지니어',
    category: 'CodeShare',
    content:
      'JWT를 사용한 인증 시스템을 만들어봤어요! 토큰 만료 시간 설정, Refresh Token 사용, HTTPS 필수 등 보안 고려사항을 적용했습니다.',
    stats: {
      likes: 19,
      upvotes: 0,
      comments: 0,
      views: 0,
    },
  },
  {
    id: '7',
    title: 'DockerEnv #1',
    author: '이백엔드',
    authorRole: 'DevOps 엔지니어',
    category: 'TechBlog',
    content:
      '팀에서 Docker를 도입한 후 개발환경이 정말 편해졌어요! 모든 환경이 동일해지고, 새 팀원 온보딩도 5분이면 끝납니다.',
    stats: {
      likes: 18,
      upvotes: 0,
      comments: 0,
      views: 0,
    },
  },
  {
    id: '8',
    title: 'TaskFlow #1',
    author: '김개발',
    authorRole: '백엔드 개발자',
    category: 'DevTools',
    content:
      '3개월 동안 틈틈이 만든 할일 관리 앱이 드디어 완성됐어요! React, TypeScript, Firebase로 드래그 앤 드롭과 실시간 협업 기능을 구현했습니다.',
    stats: {
      likes: 12,
      upvotes: 0,
      comments: 0,
      views: 0,
    },
  },
];
