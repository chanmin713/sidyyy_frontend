import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  PersonIcon,
  CalendarIcon,
  LinkBreak2Icon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  HeartIcon,
} from '@radix-ui/react-icons';
import { samplePosts } from '@/data/samplePosts';
import { PostCard } from '@/components/post/PostCard';

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'posts' | 'projects' | 'likes'>(
    'posts'
  );

  // 샘플 사용자 데이터 (실제로는 props나 API에서 받아와야 함)
  const user = {
    name: '김개발',
    role: '풀스택 개발자',
    bio: '사이드 프로젝트를 통해 성장하는 개발자입니다. React, Node.js, TypeScript를 주로 사용합니다.',
    location: '서울, 대한민국',
    joinDate: '2024년 1월',
    website: 'https://kimdev.com',
    github: 'kimdev123',
    twitter: 'kimdev_twitter',
    instagram: 'kimdev_insta',
    followers: 1247,
    following: 89,
    posts: 23,
    projects: 8,
    likes: 156,
  };

  // 사용자의 포스트 필터링
  const userPosts = samplePosts.filter(post => post.author === user.name);

  const getTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <div className='space-y-4'>
            {userPosts.map((post, index) => (
              <PostCard
                key={post.id}
                id={post.id}
                author={post.author}
                authorRole={post.authorRole}
                timestamp={post.timestamp}
                content={post.content}
                hashtags={post.hashtags}
                likes={post.likes}
                comments={post.comments}
                hasImage={post.hasImage}
                isFirst={index === 0}
                isLast={index === userPosts.length - 1}
                category={post.category}
                projectLikes={post.projectLikes}
                projectLogo={post.projectLogo}
              />
            ))}
            {userPosts.length === 0 && (
              <div className='text-center py-12'>
                <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <PersonIcon className='w-8 h-8 text-gray-400' />
                </div>
                <h3 className='text-lg font-medium text-gray-900 mb-2'>
                  아직 작성한 글이 없습니다
                </h3>
                <p className='text-gray-500'>첫 번째 글을 작성해보세요!</p>
              </div>
            )}
          </div>
        );
      case 'projects':
        return (
          <div className='text-center py-12'>
            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <GitHubLogoIcon className='w-8 h-8 text-gray-400' />
            </div>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              프로젝트 기능 준비 중
            </h3>
            <p className='text-gray-500'>곧 만나보실 수 있습니다!</p>
          </div>
        );
      case 'likes':
        return (
          <div className='text-center py-12'>
            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <HeartIcon className='w-8 h-8 text-gray-400' />
            </div>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              좋아요 기능 준비 중
            </h3>
            <p className='text-gray-500'>곧 만나보실 수 있습니다!</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='w-full max-w-4xl mx-auto px-4 py-6'>
      {/* 프로필 헤더 */}
      <Card className='mb-6'>
        <CardContent className='p-8'>
          <div className='flex flex-col md:flex-row gap-6'>
            {/* 프로필 이미지 */}
            <div className='flex-shrink-0'>
              <div className='w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center'>
                <PersonIcon className='w-16 h-16 text-gray-400' />
              </div>
            </div>

            {/* 프로필 정보 */}
            <div className='flex-1'>
              <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-4'>
                <div>
                  <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                    {user.name}
                  </h1>
                  <p className='text-lg text-gray-600 mb-2'>{user.role}</p>
                  <p className='text-gray-700 mb-4'>{user.bio}</p>
                </div>
                <button className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
                  팔로우
                </button>
              </div>

              {/* 통계 */}
              <div className='flex gap-6 mb-4'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-gray-900'>
                    {user.posts}
                  </div>
                  <div className='text-sm text-gray-500'>글</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-gray-900'>
                    {user.projects}
                  </div>
                  <div className='text-sm text-gray-500'>프로젝트</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-gray-900'>
                    {user.followers}
                  </div>
                  <div className='text-sm text-gray-500'>팔로워</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-gray-900'>
                    {user.following}
                  </div>
                  <div className='text-sm text-gray-500'>팔로잉</div>
                </div>
              </div>

              {/* 추가 정보 */}
              <div className='space-y-2 text-sm text-gray-600'>
                <div className='flex items-center gap-2'>
                  <span className='w-4 h-4 flex items-center justify-center'>
                    📍
                  </span>
                  <span>{user.location}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <CalendarIcon className='w-4 h-4' />
                  <span>{user.joinDate} 가입</span>
                </div>
                {user.website && (
                  <div className='flex items-center gap-2'>
                    <LinkBreak2Icon className='w-4 h-4' />
                    <a
                      href={user.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:underline'
                    >
                      {user.website}
                    </a>
                  </div>
                )}
              </div>

              {/* 소셜 링크 */}
              <div className='flex gap-4 mt-4'>
                {user.github && (
                  <a
                    href={`https://github.com/${user.github}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
                  >
                    <GitHubLogoIcon className='w-4 h-4 text-gray-600' />
                  </a>
                )}
                {user.twitter && (
                  <a
                    href={`https://twitter.com/${user.twitter}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
                  >
                    <TwitterLogoIcon className='w-4 h-4 text-gray-600' />
                  </a>
                )}
                {user.instagram && (
                  <a
                    href={`https://instagram.com/${user.instagram}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
                  >
                    <InstagramLogoIcon className='w-4 h-4 text-gray-600' />
                  </a>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 탭 네비게이션 */}
      <div className='mb-6'>
        <div className='flex space-x-1 bg-gray-100 rounded-lg p-1'>
          {[
            { id: 'posts', label: '글', count: userPosts.length },
            { id: 'projects', label: '프로젝트', count: user.projects },
            { id: 'likes', label: '좋아요', count: user.likes },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* 탭 콘텐츠 */}
      {getTabContent()}
    </div>
  );
}
