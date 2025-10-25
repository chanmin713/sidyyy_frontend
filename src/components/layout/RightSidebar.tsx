import { SidebarActionButton } from './sidebar/SidebarActionButton';
import { SidebarContent } from './sidebar/SidebarContent';

export function RightSidebar() {
  return (
    <div className='hidden lg:block w-80 sticky top-[70px] self-start min-h-screen border-l border-gray-200 pl-6 pt-6 bg-white'>
      <div className='space-y-6'>
        {/* 액션 버튼 (페이지별로 다름) */}
        <SidebarActionButton />

        {/* 동적 사이드바 콘텐츠 */}
        <div className='bg-white border border-gray-200 rounded-lg p-6'>
          <SidebarContentRenderer />
        </div>
      </div>
    </div>
  );
}

// 사이드바 콘텐츠 렌더러 컴포넌트
function SidebarContentRenderer() {
  const content = SidebarContent();

  return (
    <>
      <h3 className='font-semibold text-gray-900 mb-4 flex items-center gap-2'>
        {content.icon}
        {content.title}
      </h3>
      <div className='space-y-3'>
        {content.data.map((item, index) => (
          <div key={item.id || index}>{content.renderItem(item as any)}</div>
        ))}
      </div>
    </>
  );
}
