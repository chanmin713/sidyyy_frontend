import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/layouts/Layout'
import { HomePage } from '@/pages/HomePage'
import { PostDetailPage } from '@/pages/PostDetailPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App