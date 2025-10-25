// 프로젝트 속성 타입 정의
interface ProjectProperties {
  id: string;
  name: string;
  description: string;
  creator: string;
  author: string;
  authorRole: string;
  createdAt: string;
  updatedAt: string;
  stats: {
    likes: number;
    views: number;
    comments: number;
    followers: number;
  };
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  deployUrl?: string;
  tags: string[];
  category: string;
  techStack: string[];
  status: 'planning' | 'in_progress' | 'completed';
  likes?: number;
  comments?: number;
  participants?: string[];
}

export const sampleProjects: ProjectProperties[] = [
  {
    id: '1',
    name: 'Sidyyy',
    description:
      '개발자 커뮤니티 플랫폼입니다. 개발자들이 프로젝트를 공유하고 협업할 수 있는 공간을 제공합니다.',
    creator: '김개발',
    author: '김개발',
    authorRole: '프론트엔드 개발자',
    githubUrl: 'https://github.com/example/sidyyy',
    deployUrl: 'https://sidyyy.vercel.app',
    status: 'in_progress',
    category: '웹 개발',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    stats: {
      likes: 24,
      views: 1200,
      comments: 8,
      followers: 45,
    },
    likes: 24,
    comments: 8,
  },
  {
    id: '2',
    name: 'DevTools',
    description:
      '개발자 도구 모음 프로젝트입니다. 다양한 개발 도구들을 한 곳에서 관리하고 공유할 수 있습니다.',
    creator: '이도구',
    author: '이도구',
    authorRole: '풀스택 개발자',
    githubUrl: 'https://github.com/example/devtools',
    status: 'in_progress',
    category: '개발 도구',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18',
    tags: ['React Native', 'Expo', 'TypeScript'],
    techStack: ['React Native', 'Expo', 'TypeScript'],
    stats: {
      likes: 18,
      views: 980,
      comments: 5,
      followers: 32,
    },
    likes: 18,
    comments: 5,
  },
  {
    id: '3',
    name: 'CodeShare',
    description: '코드 스니펫을 공유하고 학습할 수 있는 개발자 커뮤니티입니다.',
    creator: '박코드',
    author: '박코드',
    authorRole: '백엔드 개발자',
    githubUrl: 'https://github.com/example/codeshare',
    status: 'completed',
    category: '교육',
    createdAt: '2024-01-12',
    updatedAt: '2024-01-19',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    techStack: ['Next.js', 'Prisma', 'PostgreSQL'],
    stats: {
      likes: 15,
      views: 750,
      comments: 3,
      followers: 28,
    },
    likes: 15,
    comments: 3,
    participants: ['박코드', '김개발', '이분석'],
  },
  {
    id: '4',
    name: 'TechBlog',
    description:
      '기술 블로그 플랫폼으로, 개발자들이 기술 경험과 지식을 공유할 수 있습니다.',
    creator: '최블로그',
    author: '최블로그',
    authorRole: '프론트엔드 개발자',
    githubUrl: 'https://github.com/example/techblog',
    status: 'in_progress',
    category: '블로그',
    createdAt: '2024-01-08',
    updatedAt: '2024-01-15',
    tags: ['React', 'Node.js', 'MongoDB'],
    techStack: ['React', 'Node.js', 'MongoDB'],
    stats: {
      likes: 12,
      views: 600,
      comments: 2,
      followers: 20,
    },
    likes: 12,
    comments: 2,
    participants: ['최블로그', '박데이터'],
  },
];
