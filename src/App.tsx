import { Layout } from '@/layouts/Layout'
import { PostInput } from '@/components/PostInput'
import { PostList } from '@/components/PostList'

function App() {
  return (
    <Layout>
      <div className="space-y-6">
        <PostInput />
        <PostList />
      </div>
    </Layout>
  )
}

export default App