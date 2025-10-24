import type { ProjectComment } from '@/types';

export const sampleProjectComments: Record<string, ProjectComment[]> = {
  '1': [
    // 웹 개발 프로젝트
    {
      id: 'pc1',
      author: '이디자인',
      content: '정말 멋진 프로젝트네요! UI/UX 디자인이 특히 인상적입니다.',
      timestamp: '2시간 전',
      likes: 5,
      replies: [
        {
          id: 'pcr1',
          author: '김개발',
          content: '감사합니다! 디자인 피드백이 큰 도움이 되었어요.',
          timestamp: '1시간 전',
          likes: 2,
        },
      ],
    },
    {
      id: 'pc2',
      author: '박백엔드',
      content:
        '백엔드 API 설계가 정말 깔끔하네요. 성능 최적화도 잘 되어있고요.',
      timestamp: '4시간 전',
      likes: 3,
    },
    {
      id: 'pc3',
      author: '최프론트',
      content:
        'React 컴포넌트 구조가 정말 잘 설계되어 있네요. 참고하고 싶습니다!',
      timestamp: '6시간 전',
      likes: 7,
    },
  ],
  '2': [
    // 모바일 앱 프로젝트
    {
      id: 'pc4',
      author: '김개발',
      content: '크로스 플랫폼 개발이 이렇게 매끄럽게 될 수 있군요!',
      timestamp: '1일 전',
      likes: 4,
    },
    {
      id: 'pc5',
      author: '이모바일',
      content: '성능 최적화에 많은 노력을 기울였습니다. 결과가 만족스러워요.',
      timestamp: '2일 전',
      likes: 6,
    },
  ],
  '3': [
    // 데이터 분석 프로젝트
    {
      id: 'pc6',
      author: '김분석',
      content:
        '데이터 시각화가 정말 직관적이네요. 인사이트를 쉽게 파악할 수 있어요.',
      timestamp: '3일 전',
      likes: 8,
    },
    {
      id: 'pc7',
      author: '박데이터',
      content: '머신러닝 모델의 정확도가 예상보다 높게 나왔습니다.',
      timestamp: '4일 전',
      likes: 5,
    },
    {
      id: 'pc8',
      author: '이통계',
      content:
        '통계적 유의성을 잘 고려한 분석이네요. 참고 자료로 활용하겠습니다.',
      timestamp: '5일 전',
      likes: 3,
    },
  ],
  '4': [
    // AI/ML 프로젝트
    {
      id: 'pc9',
      author: '박데이터',
      content: '딥러닝 모델의 성능이 정말 인상적이네요!',
      timestamp: '1일 전',
      likes: 12,
    },
    {
      id: 'pc10',
      author: '최AI',
      content:
        '자연어 처리 부분에서 많은 시행착오가 있었지만, 결과적으로 만족스러워요.',
      timestamp: '2일 전',
      likes: 9,
    },
    {
      id: 'pc11',
      author: '김연구',
      content: '논문으로 발표할 만한 수준의 연구네요. 축하합니다!',
      timestamp: '3일 전',
      likes: 15,
    },
  ],
  '5': [
    // 블록체인 프로젝트
    {
      id: 'pc12',
      author: '김개발',
      content: '스마트 컨트랙트 보안 검토가 잘 되어있네요.',
      timestamp: '1주일 전',
      likes: 2,
    },
  ],
  '6': [
    // 게임 개발 프로젝트
    {
      id: 'pc13',
      author: '이디자인',
      content: '게임 아트 스타일이 정말 매력적이네요!',
      timestamp: '2일 전',
      likes: 6,
    },
    {
      id: 'pc14',
      author: '박사운드',
      content: '사운드 디자인이 게임 분위기를 잘 살려주네요.',
      timestamp: '3일 전',
      likes: 4,
    },
    {
      id: 'pc15',
      author: '강게임',
      content: '멀티플레이어 기능 구현이 생각보다 복잡했지만, 재미있었습니다.',
      timestamp: '4일 전',
      likes: 8,
    },
  ],
};
