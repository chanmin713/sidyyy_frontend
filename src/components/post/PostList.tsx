import { PostCard } from './PostCard'
import { samplePosts } from '@/data/samplePosts'

export function PostList() {
  return (
    <div className="w-full max-w-3xl mx-auto">
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
          isFirst={index === 0}
          isLast={index === samplePosts.length - 1}
          category={post.category}
        />
      ))}
    </div>
  )
}

