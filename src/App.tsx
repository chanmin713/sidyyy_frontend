import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from '@/layouts/Layout';
import { LoadingSpinner } from '@/components/ui/feedback/loading-spinner';

// 코드 스플리팅을 위한 lazy loading
const HomePage = lazy(() => import('@/pages/main/HomePage'));
const LogPage = lazy(() => import('@/pages/log/LogPage'));
const WritePostPage = lazy(() => import('@/pages/write/WritePostPage'));
const ProjectPage = lazy(() => import('@/pages/project/ProjectPage'));
const ProjectDetailPage = lazy(
  () => import('@/pages/project/ProjectDetailPage')
);
const RecruitPage = lazy(() => import('@/pages/recruit/RecruitPage'));
const MemberPage = lazy(() => import('@/pages/member/MemberPage'));
const PostDetailPage = lazy(() => import('@/pages/community/PostDetailPage'));
const ProfilePage = lazy(() => import('@/pages/profile/ProfilePage'));
const UserProfilePage = lazy(() => import('@/pages/profile/UserProfilePage'));
const MessagePage = lazy(() => import('@/pages/messaging/MessagePage'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense
          fallback={<LoadingSpinner size='lg' text='페이지를 불러오는 중...' />}
        >
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/log' element={<LogPage />} />
            <Route path='/project' element={<ProjectPage />} />
            <Route path='/recruit' element={<RecruitPage />} />
            <Route path='/member' element={<MemberPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/user/:username' element={<UserProfilePage />} />
            <Route path='/message' element={<MessagePage />} />
            <Route path='/write' element={<WritePostPage />} />
            <Route path='/post/:id' element={<PostDetailPage />} />
            <Route
              path='/project/:projectName'
              element={<ProjectDetailPage />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
