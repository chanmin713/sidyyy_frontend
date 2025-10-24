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
              isLast={index === posts.length - 1}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default App