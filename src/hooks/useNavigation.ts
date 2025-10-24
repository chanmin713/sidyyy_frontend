import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

/**
 * 공통 네비게이션 로직을 위한 훅
 * @returns 네비게이션 함수들
 */
export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToPost = useCallback(
    (postId: string) => {
      navigate(`/post/${postId}`);
    },
    [navigate]
  );

  const navigateToProject = useCallback(
    (projectName: string) => {
      navigate(`/project/${encodeURIComponent(projectName)}`);
    },
    [navigate]
  );

  const navigateToUser = useCallback(
    (username: string) => {
      navigate(`/user/${encodeURIComponent(username)}`);
    },
    [navigate]
  );

  const navigateToWrite = useCallback(() => {
    navigate('/write');
  }, [navigate]);

  const navigateBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const navigateToHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const navigateToLog = useCallback(() => {
    navigate('/log');
  }, [navigate]);

  return {
    navigateToPost,
    navigateToProject,
    navigateToUser,
    navigateToWrite,
    navigateBack,
    navigateToHome,
    navigateToLog,
  };
};
