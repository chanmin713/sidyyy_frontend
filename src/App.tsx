import { Layout } from '@/layouts/Layout'
import { PostInput } from '@/components/PostInput'
import { PostCard } from '@/components/PostCard'
import { samplePosts } from '@/data/samplePosts'

function App() {
  const posts = samplePosts

  return (
    <Layout>
      <div className="space-y-6">
        <PostInput />
        
        <div className="w-full max-w-2xl mx-auto space-y-4">
          {posts.map((post, index) => {
            // 15줄 이상인지 확인 (대략 500자 이상)
            const shouldShowMoreButton = post.content.length > 500
            return (
                  <PostCard
                    key={index}
                    author={post.author}
                    title={post.title}
                    timestamp={post.timestamp}
                content={post.content}
                likes={post.likes}
                comments={post.comments}
                shares={post.shares}
                bookmarks={post.bookmarks}
                hasImage={post.hasImage}
                isLast={index === posts.length - 1}
                showMoreButton={shouldShowMoreButton}
                category={post.category}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default App