import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { HomePage } from '@/pages/HomePage';
import { LogPage } from '@/pages/LogPage';
import { ProjectPage } from '@/pages/ProjectPage';
import { RecruitPage } from '@/pages/RecruitPage';
import { MemberPage } from '@/pages/MemberPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { MessagePage } from '@/pages/MessagePage';
import { PostDetailPage } from '@/pages/PostDetailPage';
import { WritePostPage } from '@/pages/WritePostPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/log' element={<LogPage />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/recruit' element={<RecruitPage />} />
          <Route path='/member' element={<MemberPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/message' element={<MessagePage />} />
          <Route path='/write' element={<WritePostPage />} />
          <Route path='/post/:id' element={<PostDetailPage />} />
          <Route path='/project/:projectName' element={<ProjectDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
