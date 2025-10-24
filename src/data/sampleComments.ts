import type { Comment } from '@/types'

export const sampleComments: Comment[] = [
  {
    id: "1",
    author: "김개발자",
    content: "정말 유용한 정보네요! 저도 비슷한 프로젝트를 진행 중인데 도움이 많이 됐어요 👍",
    timestamp: "1시간 전",
    likes: 3,
    replies: [
      {
        id: "1-1",
        author: "최성능",
        content: "도움이 되었다니 다행이에요! 혹시 궁금한 점 있으면 언제든 물어보세요 😊",
        timestamp: "30분 전",
        likes: 1
      }
    ]
  },
  {
    id: "2", 
    author: "박프론트",
    content: "성능 최적화는 정말 중요한 부분이죠. Lighthouse 점수가 45에서 95로 올라간 건 정말 대단해요!",
    timestamp: "2시간 전",
    likes: 1,
    replies: [
      {
        id: "2-1",
        author: "이백엔드",
        content: "저도 동감해요! 특히 Core Web Vitals 개선이 인상적이네요",
        timestamp: "1시간 전",
        likes: 0
      },
      {
        id: "2-2",
        author: "박프론트",
        content: "네, LCP와 CLS 점수가 많이 개선됐어요",
        timestamp: "45분 전",
        likes: 1
      }
    ]
  },
  {
    id: "3",
    author: "이백엔드",
    content: "CDN 도입하신 부분이 특히 인상적이네요. 어떤 CDN 서비스를 사용하셨나요?",
    timestamp: "3시간 전",
    likes: 0
  },
  {
    id: "4",
    author: "최성능",
    content: "Cloudflare를 사용했어요! 무료 플랜으로도 충분히 효과를 볼 수 있었습니다.",
    timestamp: "2시간 전",
    likes: 2,
    replies: [
      {
        id: "4-1",
        author: "강웹개발",
        content: "Cloudflare 무료 플랜도 정말 좋죠! 저도 사용 중이에요",
        timestamp: "1시간 전",
        likes: 0
      }
    ]
  },
  {
    id: "5",
    author: "강웹개발",
    content: "코드 스플리팅 적용하신 방법도 궁금해요. React.lazy() 사용하셨나요?",
    timestamp: "4시간 전",
    likes: 1
  }
]
