import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { PostInput } from '@/components/PostInput'
import { PostCard } from '@/components/PostCard'

function App() {
  // 샘플 데이터
  const posts = [
    {
      author: "사이드",
      title: "SYDE 공식 계정입니다.",
      subtitle: "",
      timestamp: "3일 전",
      content: `■ SYDE 멤버의 프로젝트 소개 - 플레이포켓

• 스팀에서 게임을 샀는데 다른 곳에서 더 싸게 팔고 있다는 걸 나중에 알게 된 경험
• 세일을 놓쳐서 원가에 산 게임이 며칠 후 반값으로 떨어졌던 경험  
• 스위치, PS, 엑스박스, 스팀 등 여러 플랫폼에 흩어져 있는 게임들을 정리하기 어려웠던 경험

플레이포켓이 이 모든 고민을 해결해드립니다!

✓ 60+ 스토어 실시간 가격 비교
어디서 사는게 가장 저렴한지 한눈에!`,
      likes: 2,
      comments: 0,
      shares: 0,
      bookmarks: 0
    },
    {
      author: "사이드",
      title: "SYDE 공식 계정입니다.",
      subtitle: "",
      timestamp: "4일 전",
      content: `디자이너 없이 앱 만드는 1인 개발자들 주목!

SYDE 커뮤니티에서 추천하는 디자인 레퍼런스 사이트 8곳 😉

→ uibowl.io → UI 디자인 패턴 별 모음
→ dribbble.com → 트렌드 파악, 영감용
→ mobbin.design → 모바일 앱 UI 갤러리
→ pageflows.com → 사용자 플로우 참고
→ screenlane.com → 앱 스크린샷 모음
→ pinterest.com → 디자인 아이디어 수집
→ behance.net → 포트폴리오 참고
→ figma.com → 무료 디자인 템플릿`,
      likes: 4,
      comments: 0,
      shares: 0,
      bookmarks: 0
    },
    {
      author: "DQ",
      title: "",
      subtitle: "자꾸만 뭔 그렇게 한라 그러는 개박자. 10월 17일",
      timestamp: "",
      content: "",
      likes: 0,
      comments: 0,
      shares: 0,
      bookmarks: 0
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* 메인 콘텐츠 */}
          <div className="flex-1 max-w-2xl">
            <PostInput />
            
            {/* 포스트 목록 */}
            <div className="space-y-4">
              {posts.map((post, index) => (
                <PostCard
                  key={index}
                  author={post.author}
                  title={post.title}
                  subtitle={post.subtitle}
                  timestamp={post.timestamp}
                  content={post.content}
                  likes={post.likes}
                  comments={post.comments}
                  shares={post.shares}
                  bookmarks={post.bookmarks}
                />
              ))}
            </div>
          </div>

          {/* 사이드바 */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App