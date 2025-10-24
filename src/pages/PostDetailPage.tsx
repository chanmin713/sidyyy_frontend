import { memo, useMemo, useRef } from 'react'
import { PersonIcon, HeartIcon, ChatBubbleIcon, ArrowLeftIcon, DotsHorizontalIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { samplePosts } from '@/data/samplePosts'
import { sampleComments } from '@/data/sampleComments'
import { ReplyComponent } from '@/components/post/Reply'
import { Dropdown } from '@/components/ui/dropdown'
import type { Post, Comment } from '@/types'

export const PostDetailPage = memo(function PostDetailPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 실제 포스트 데이터 가져오기
  const post = useMemo(() => {
    if (!id) return null
    return samplePosts.find(p => p.id === id) || samplePosts[0]
  }, [id])

  // 해당 포스트의 댓글들 (실제로는 포스트별로 다를 수 있음)
  const comments = useMemo(() => {
    return sampleComments
  }, [])

  const handleBack = () => {
    navigate(-1)
  }

  const handleFileAttach = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      // 실제로는 파일 업로드 로직 구현
      console.log('첨부된 파일:', files[0].name)
      // 여기서 파일을 서버에 업로드하거나 미리보기 표시
    }
  }

  const handleEdit = () => {
    console.log('글 수정')
    // 실제로는 수정 페이지로 이동하거나 수정 모드로 전환
  }

  const handleDelete = () => {
    if (confirm('정말로 이 글을 삭제하시겠습니까?')) {
      console.log('글 삭제')
      // 실제로는 삭제 API 호출 후 목록으로 이동
      navigate('/')
    }
  }


  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">포스트를 찾을 수 없습니다</h1>
          <button 
            onClick={handleBack}
            className="text-blue-600 hover:text-blue-800"
          >
            뒤로가기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* 뒤로가기 버튼 */}
      <button 
        onClick={handleBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5" />
        <span>뒤로가기</span>
      </button>

      {/* 글 내용 */}
      <article className="bg-white rounded-lg border border-gray-200 p-6">
        {/* 작성자 정보 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start flex-1">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 border-2 border-gray-300">
                <PersonIcon className="w-5 h-5 text-gray-500" />
              </div>
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex items-baseline gap-2">
                <h1 className="font-semibold text-lg hover:underline">{post.author}</h1>
                <span className="text-sm text-gray-500">· {post.timestamp}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* 카테고리 */}
            {post.category && (
              <div className="flex-shrink-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {post.category}
                </span>
              </div>
            )}
            
            {/* 더보기 메뉴 */}
            <Dropdown
              trigger={
                <button
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                  title="더보기"
                >
                  <DotsHorizontalIcon className="w-5 h-5" />
                </button>
              }
              align="right"
              className="w-36"
            >
              <div className="py-1">
                <button
                  onClick={handleEdit}
                  className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                >
                  <Pencil1Icon className="w-4 h-4" />
                  수정
                </button>
                <button
                  onClick={handleDelete}
                  className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                >
                  <TrashIcon className="w-4 h-4" />
                  삭제
                </button>
              </div>
            </Dropdown>
          </div>
        </div>

        {/* 글 본문 */}
        <div className="mb-6">
          <div className="prose max-w-none">
            <p className="text-base leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
          </div>
        </div>

        {/* 해시태그 */}
        {post.hashtags && post.hashtags.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {post.hashtags.map((hashtag, index) => (
                <span 
                  key={index} 
                  className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer hover:underline"
                >
                  #{hashtag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 이미지 */}
        {post.hasImage && (
          <div className="mb-6">
            <div className="relative w-full rounded-lg overflow-hidden bg-gray-100" style={{ aspectRatio: '16 / 9' }}>
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">이미지</span>
              </div>
            </div>
          </div>
        )}

        {/* 액션 버튼들 */}
        <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 rounded-lg p-3 -m-3 bg-transparent hover:bg-red-50 group transition-colors">
              <HeartIcon className="w-5 h-5 text-gray-500 group-hover:text-red-500" />
              <span className="group-hover:text-red-500 font-medium">{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg p-3 -m-3 bg-transparent hover:bg-green-50 hover:text-green-600 transition-colors">
              <ChatBubbleIcon className="w-5 h-5" />
              <span className="font-medium">{post.comments}</span>
            </button>
          </div>
          
          {/* 신고 버튼 */}
          <button 
            onClick={() => console.log('글 신고')}
            className="text-gray-500 hover:text-red-500 transition-colors text-sm"
            title="신고"
          >
            신고
          </button>
        </div>
      </article>

      {/* 댓글 섹션 */}
      <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">댓글 {comments.length}개</h2>
        
        {/* 댓글 작성 */}
        <div className="mb-6">
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
              <PersonIcon className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="relative">
                <textarea 
                  placeholder="댓글을 작성하세요..."
                  className="w-full p-3.5 pr-12 text-sm border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
                {/* 파일 첨부 버튼 */}
                <button
                  onClick={handleFileAttach}
                  className="absolute right-3 top-3 p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
                  title="파일 첨부"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
              </div>
              
              {/* 숨겨진 파일 input */}
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*,.pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
              />
              
              <div className="flex justify-end mt-2.5">
                <button className="px-5 py-2.5 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  댓글 작성
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 댓글 목록 */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <PersonIcon className="w-4 h-4 text-gray-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{comment.author}</span>
                    <span className="text-xs text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    {comment.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors">
                      <HeartIcon className="w-3 h-3" />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                      답글
                    </button>
                  </div>
                </div>
              </div>
              
              {/* 답글들 */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="mt-2">
                  {comment.replies.map((reply) => (
                    <ReplyComponent key={reply.id} reply={reply} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
