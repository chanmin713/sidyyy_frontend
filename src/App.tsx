import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { HomePage } from '@/pages/HomePage';
import { ProjectPage } from '@/pages/ProjectPage';
import { RecruitPage } from '@/pages/RecruitPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { PostDetailPage } from '@/pages/PostDetailPage';
import { WritePostPage } from '@/pages/WritePostPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/recruit' element={<RecruitPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/write' element={<WritePostPage />} />
          <Route path='/post/:id' element={<PostDetailPage />} />
          <Route path='/project/:projectName' element={<ProjectDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
