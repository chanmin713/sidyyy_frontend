import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  NAVIGATION_TABS,
  NAVIGATION_PATHS,
  type NavigationTabId,
} from '@/constants';

/**
 * 네비게이션 관련 커스텀 훅
 */
export function useNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<NavigationTabId | ''>('');

  // 현재 경로에 따라 활성 탭 설정
  useEffect(() => {
    const path = location.pathname;
    const tab = NAVIGATION_TABS.find(tab => tab.path === path);
    setActiveTab(tab?.id || '');
  }, [location.pathname]);

  // 탭 클릭 핸들러
  const handleTabClick = (tabId: NavigationTabId) => {
    setActiveTab(tabId);
    const tab = NAVIGATION_TABS.find(t => t.id === tabId);
    if (tab) {
      navigate(tab.path);
    }
  };

  // 경로로 이동
  const navigateToPath = (path: string) => {
    navigate(path);
  };

  // 홈으로 이동
  const navigateToHome = () => {
    navigate(NAVIGATION_PATHS.HOME);
  };

  // 로그 페이지로 이동
  const navigateToLog = () => {
    navigate(NAVIGATION_PATHS.LOG);
  };

  // 프로젝트 페이지로 이동
  const navigateToProject = (category?: string) => {
    if (category) {
      navigate(`/project?category=${encodeURIComponent(category)}`);
    } else {
      navigate(NAVIGATION_PATHS.PROJECT);
    }
  };

  // 모집 페이지로 이동
  const navigateToRecruit = () => {
    navigate(NAVIGATION_PATHS.RECRUIT);
  };

  // 멤버 페이지로 이동
  const navigateToMember = () => {
    navigate(NAVIGATION_PATHS.MEMBER);
  };

  // 메시지 페이지로 이동
  const navigateToMessage = () => {
    navigate(NAVIGATION_PATHS.MESSAGE);
  };

  // 프로필 페이지로 이동
  const navigateToProfile = () => {
    navigate(NAVIGATION_PATHS.PROFILE);
  };

  // 이전 페이지로 이동
  const navigateBack = () => {
    navigate(-1);
  };

  // 특정 포스트로 이동
  const navigateToPost = (postId: string) => {
    navigate(`/post/${postId}`);
  };

  // 특정 프로젝트로 이동
  const navigateToProjectDetail = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  // 특정 사용자 프로필로 이동
  const navigateToUserProfile = (username: string) => {
    navigate(`/user/${username}`);
  };

  return {
    activeTab,
    currentPath: location.pathname,
    handleTabClick,
    navigateToPath,
    navigateToHome,
    navigateToLog,
    navigateToProject,
    navigateToRecruit,
    navigateToMember,
    navigateToMessage,
    navigateToProfile,
    navigateBack,
    navigateToPost,
    navigateToProjectDetail,
    navigateToUserProfile,
  };
}
