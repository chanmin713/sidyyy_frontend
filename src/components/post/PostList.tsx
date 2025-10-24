import { PostCard } from './PostCard'
import { samplePosts } from '@/data/samplePosts'

export function PostList() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-0">
      {samplePosts.map((post, index) => (
        <PostCard
          key={index}
          author={post.author}
          timestamp={post.timestamp}
          content={post.content}
          hashtags={post.hashtags}
          likes={post.likes}
          comments={post.comments}
          bookmarks={post.bookmarks}
          hasImage={post.hasImage}
          isLast={index === samplePosts.length - 1}
          category={post.category}
        />
      ))}
    </div>
  )
}

