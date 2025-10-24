import { memo, useMemo, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { samplePosts } from '@/data/samplePosts';
import { sampleComments } from '@/data/sampleComments';
import { PostContent } from '@/components/post/PostContent';
import { CommentSection } from '@/components/post/CommentSection';

export const PostDetailPage = memo(function PostDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  // 실제 포스트 데이터 가져오기
  const post = useMemo(() => {
    if (!id) return null;
    return samplePosts.find(p => p.id === id) || samplePosts[0];
  }, [id]);

  // 해당 포스트의 댓글들 (실제로는 포스트별로 다를 수 있음)
  const comments = useMemo(() => {
    return sampleComments;
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleProjectClick = () => {
    if (post?.category) {
      navigate(`/project/${encodeURIComponent(post.category)}`);
    }
  };

  const handleCommentClick = () => {
    // 댓글 영역으로 스크롤
    commentInputRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    // 약간의 지연 후 포커스 (스크롤 완료 후)
    setTimeout(() => {
      commentInputRef.current?.focus();
    }, 500);
  };

  // URL 해시가 #comments인 경우 자동으로 댓글 영역으로 스크롤
  useEffect(() => {
    if (window.location.hash === '#comments') {
      setTimeout(() => {
        handleCommentClick();
      }, 100);
    }
  }, []);

  const handleFileAttach = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // 실제로는 파일 업로드 로직 구현
      console.log('첨부된 파일:', files[0].name);
      // 여기서 파일을 서버에 업로드하거나 미리보기 표시
    }
  };

  const handleEdit = () => {
    console.log('글 수정');
    // 실제로는 수정 페이지로 이동하거나 수정 모드로 전환
  };

  const handleDelete = () => {
    if (confirm('정말로 이 글을 삭제하시겠습니까?')) {
      console.log('글 삭제');
      // 실제로는 삭제 API 호출 후 목록으로 이동
      navigate('/');
    }
  };

  if (!post) {
    return (
      <div className='max-w-4xl mx-auto px-4 py-6'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>
            포스트를 찾을 수 없습니다
          </h1>
          <button
            onClick={handleBack}
            className='text-blue-600 hover:text-blue-800'
          >
            뒤로가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-5xl mx-auto px-4 py-6'>
      {/* 뒤로가기 버튼 */}
      <button
        onClick={handleBack}
        className='flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors'
      >
        <ArrowLeftIcon className='w-5 h-5' />
        <span>뒤로가기</span>
      </button>

      <PostContent
        post={post}
        onProjectClick={handleProjectClick}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onCommentClick={handleCommentClick}
      />

      <CommentSection
        comments={comments}
        onFileAttach={handleFileAttach}
        onFileChange={handleFileChange}
        commentInputRef={commentInputRef}
        fileInputRef={fileInputRef}
      />
    </div>
  );
});
