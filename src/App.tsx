import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { HomePage } from '@/pages/HomePage';
import { PostDetailPage } from '@/pages/PostDetailPage';
import { WritePostPage } from '@/pages/WritePostPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/write' element={<WritePostPage />} />
          <Route path='/post/:id' element={<PostDetailPage />} />
          <Route path='/project/:projectName' element={<ProjectDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
