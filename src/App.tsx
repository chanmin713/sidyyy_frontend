import { Header } from '@/components/Header'
import { RightSidebar } from '@/components/RightSidebar'
import { PostInput } from '@/components/PostInput'
import { PostCard } from '@/components/PostCard'

function App() {
  // 샘플 데이터
  const posts = [
    {
      author: "사이드",
      title: "Sidyyy 공식 계정입니다.",
      subtitle: "",
      timestamp: "3일 전",
      content: `■ Sidyyy 멤버의 프로젝트 소개 - 플레이포켓

이런 경험, 한 번쯤 있지 않으신가요?

☆ 스팀에서 결제했는데 다른 스토어가 더 쌌던 경험
☆ 찜해두고 "나중에 사야지" 했다가 세일 놓친 경험  
☆ 스위치·플스·엑박·스팀에 흩어진 게임, 정리에 골머리 앓았던 경험

플레이포켓이 이 모든 고민을 해결해드립니다!

✔ 60+ 스토어 실시간 가격 비교
어디서 사는게 가장 저렴한지 한눈에!`,
      likes: 2,
      comments: 0,
      shares: 0,
      bookmarks: 0
    },
    {
      author: "사이드",
      title: "Sidyyy 공식 계정입니다.",
      subtitle: "",
      timestamp: "4일 전",
      content: `디자이너 없이 앱 만드는 1인 개발자들 주목!

Sidyyy 커뮤니티에서 추천하는 디자인 레퍼런스 사이트 8곳 😉

→ uibowl.io → UI 디자인 패턴 별 모음
→ upa.userspoon.com → UX 영상 모음
→ wwit.design → 한국 UI 모음
→ ko.designus.design/reference → 디자인 레퍼런스
→ dribbble.com → 트렌드 파악, 영감용
→ mobbin.com → 유명 앱 UI 모음
→ scrnshts.club → 앱 스크린샷 모음
→ collectui.com → 카테고리별 검색`,
      likes: 4,
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

          {/* 오른쪽 사이드바 */}
          <div className="hidden lg:block">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App