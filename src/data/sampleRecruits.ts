export interface Recruit {
  id: string;
  title: string;
  description: string;
  company: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'design';
  skills: string[];
  participants: number;
  duration: string;
  location: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export const sampleRecruits: Recruit[] = [
  {
    id: '1',
    title: 'React Native 모바일 앱 개발자 모집',
    description:
      '헬스케어 분야의 모바일 앱을 함께 개발할 프론트엔드 개발자를 찾습니다. React Native 경험이 있으신 분을 우대합니다.',
    company: '헬스케어 스타트업',
    category: 'frontend',
    skills: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
    participants: 2,
    duration: '3개월',
    location: '서울 (원격 가능)',
    likes: 24,
    comments: 8,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Node.js 백엔드 API 개발자',
    description:
      'E-commerce 플랫폼의 백엔드 API를 개발할 백엔드 개발자를 모집합니다. 마이크로서비스 아키텍처 경험이 있으신 분을 우대합니다.',
    company: 'E-commerce 플랫폼',
    category: 'backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
    participants: 3,
    duration: '6개월',
    location: '부산 (원격 가능)',
    likes: 18,
    comments: 12,
    createdAt: '2024-01-14',
  },
  {
    id: '3',
    title: '풀스택 개발자 (React + Node.js)',
    description:
      '소셜 네트워킹 플랫폼을 함께 구축할 풀스택 개발자를 찾습니다. 실시간 채팅 기능 구현 경험이 있으신 분을 우대합니다.',
    company: '소셜 플랫폼 스타트업',
    category: 'fullstack',
    skills: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    participants: 4,
    duration: '4개월',
    location: '서울 (하이브리드)',
    likes: 31,
    comments: 15,
    createdAt: '2024-01-13',
  },
  {
    id: '4',
    title: 'UI/UX 디자이너 모집',
    description:
      '핀테크 앱의 UI/UX를 담당할 디자이너를 찾습니다. 모바일 앱 디자인 경험이 풍부하신 분을 우대합니다.',
    company: '핀테크 스타트업',
    category: 'design',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
    participants: 2,
    duration: '5개월',
    location: '서울 (원격 가능)',
    likes: 16,
    comments: 6,
    createdAt: '2024-01-12',
  },
  {
    id: '5',
    title: 'Vue.js 프론트엔드 개발자',
    description:
      '교육 플랫폼의 프론트엔드를 개발할 Vue.js 개발자를 모집합니다. 컴포넌트 설계 경험이 있으신 분을 우대합니다.',
    company: '에듀테크 회사',
    category: 'frontend',
    skills: ['Vue.js', 'Vuex', 'TypeScript', 'SCSS', 'Webpack'],
    participants: 2,
    duration: '3개월',
    location: '대구 (원격 가능)',
    likes: 12,
    comments: 4,
    createdAt: '2024-01-11',
  },
  {
    id: '6',
    title: 'Python Django 백엔드 개발자',
    description:
      '데이터 분석 플랫폼의 백엔드를 개발할 Django 개발자를 찾습니다. 데이터 처리 경험이 있으신 분을 우대합니다.',
    company: '데이터 분석 회사',
    category: 'backend',
    skills: ['Python', 'Django', 'PostgreSQL', 'Celery', 'Pandas'],
    participants: 3,
    duration: '4개월',
    location: '서울 (원격 가능)',
    likes: 20,
    comments: 9,
    createdAt: '2024-01-10',
  },
];
