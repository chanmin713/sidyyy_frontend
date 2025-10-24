import { Layout } from '@/layouts/Layout'
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
      content: `📱 Sidyyy 멤버의 프로젝트 소개 - 플레이포켓
_
이런 경험, 한 번쯤 있지 않으신가요?
💸 스팀에서 결제했는데 다른 스토어가 더 쌌던 경험
⏰ 찜해두고 "나중에 사야지" 했다가 세일 놓친 경험
📦 스위치·플스·엑박·스팀에 흩어진 게임, 정리에 골머리 앓았던 경험

플레이포켓이 이 모든 고민을 해결해드립니다!

───────────────
✅ 60+ 스토어 실시간 가격 비교
어디서 사는게 가장 저렴한지 한눈에!
역대 최저가·가격 변동 그래프까지

✅ 똑똑한 가격 알림
원하는 조건에 도달/할인 시작 시 즉시 알림!
이젠 "그때 살걸" 후회 NO

✅ 나만의 게임 컬렉션
모든 플랫폼 게임을 한곳에서 관리
친구들과 컬렉션 공유까지!

✅ Steam·GOG 라이브러리 자동 동기화
클릭 한 번으로 손쉽게 불러오세요!
───────────────

구경하러 가기 👉 myplaypocket.com
완전 무료 | 모바일·PC 지원 | 다크모드 지원`,
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
Sidyyy 커뮤니티에서 추천하는 디자인 레퍼런스 사이트 8곳 🎨

uibowl.io → UI 디자인 패턴 별 모음
upa.userspoon.com → UX 패턴을 영상 형태로 제공
wwit.design → 카테고리/패턴/컴포넌트 별로 앱 UI 탐색 가능
ko.designus.design/reference → 한글 UI, 토스/당근/배민 등 국내 서비스
dribbble.com → 트렌드 파악, 영감용
mobbin.com → 가장 유명한 레퍼런스 사이트, 유명한 앱들이 많음
scrnshts.club → 모바일 앱 스크린샷 아카이브
collectui.com → 카테고리별 정리, 검색 편함

저장해두고 디자인이 막막할 때마다 꺼내보세요✨`,
      likes: 4,
      comments: 0,
      shares: 0,
      bookmarks: 0
    },
    {
      author: "DQ",
      title: "",
      subtitle: "자꾸만 뭘 그렇게 할라 그러는 개발자",
      timestamp: "10월 17일",
      content: `M1 아직은 현역인거죠??

최신 M5가 M1보다 2.1배 빠르다면(코드 컴파일링 기준)
5년 됐지만 현역 맞죠??
1분 걸릴꺼, 1분만 더 기다리면 되는거 잖아요...`,
      likes: 2,
      comments: 1,
      shares: 0,
      bookmarks: 0,
      hasImage: true
    }
  ]

  return (
    <Layout>
      <div className="space-y-6">
        <PostInput />
        
        <div className="w-full max-w-2xl mx-auto space-y-4 pb-4">
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
              hasImage={post.hasImage}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default App