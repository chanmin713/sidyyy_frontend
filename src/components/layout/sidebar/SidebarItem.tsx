import React from 'react';
import { formatNumber, getTrendColor, getTrendIcon } from '@/utils/ui';
import { PROJECT_ICONS } from '@/constants/icons';
import { PersonIcon, FileTextIcon, HeartIcon } from '@radix-ui/react-icons';

// 아이콘 매핑 함수
const getIcon = (iconName: string) => {
  return (
    PROJECT_ICONS[iconName as keyof typeof PROJECT_ICONS] ||
    PROJECT_ICONS.GitHubLogoIcon
  );
};

interface SidebarItemProps {
  type: 'project' | 'member' | 'log';
  data: any;
  onClick: () => void;
}

export function SidebarItem({ type, data, onClick }: SidebarItemProps) {
  const renderProjectItem = () => (
    <>
      <div className='w-7 h-7 flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
        {React.createElement(getIcon(data.icon as string), {
          className:
            'w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-200',
        })}
      </div>
      <div className='flex-1 min-w-0'>
        <div className='flex items-center justify-between'>
          <div className='flex-1 min-w-0 overflow-hidden'>
            <h4 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200 truncate'>
              {data.name as string}
            </h4>
            <p className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200 truncate'>
              {data.description as string}
            </p>
          </div>
          <div className='flex items-center gap-2 ml-2 flex-shrink-0'>
            <div
              className={`text-xs ${getTrendColor(data.trend as 'up' | 'down' | 'stable')} flex items-center gap-1`}
            >
              <span>
                {getTrendIcon(data.trend as 'up' | 'down' | 'stable')}
              </span>
            </div>
            <div className='text-xs text-gray-400'>
              <span>
                {formatNumber(
                  (data.stats as Record<string, unknown>).upvotes as number
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderMemberItem = () => (
    <>
      <div className='w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
        <span className='text-sm font-medium text-blue-600'>
          {data.initial as string}
        </span>
      </div>
      <div className='flex-1 min-w-0'>
        <div className='flex items-center justify-between'>
          <div className='flex-1 min-w-0 overflow-hidden'>
            <h4 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200 truncate'>
              {data.name as string}
            </h4>
            <p className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200 truncate'>
              {data.bio as string}
            </p>
          </div>
          <div className='flex items-center gap-1 text-xs text-gray-400 ml-2 flex-shrink-0'>
            <PersonIcon className='w-3 h-3' />
            <span>
              {formatNumber(
                (data.stats as Record<string, unknown>).followers as number
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );

  const renderLogItem = () => (
    <>
      <div className='w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
        <FileTextIcon className='w-4 h-4 text-purple-600' />
      </div>
      <div className='flex-1 min-w-0'>
        <div className='flex items-center justify-between'>
          <div className='flex-1 min-w-0 overflow-hidden'>
            <h4 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200 truncate'>
              {data.title as string}
            </h4>
            <p className='text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200 truncate'>
              {data.content as string}
            </p>
            <p className='text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200 truncate'>
              {data.author as string}
            </p>
          </div>
          <div className='flex items-center gap-1 text-xs text-gray-400 ml-2 flex-shrink-0'>
            <HeartIcon className='w-3 h-3' />
            <span>
              {(data.stats as Record<string, unknown>).likes as number}
            </span>
          </div>
        </div>
      </div>
    </>
  );

  const renderContent = () => {
    switch (type) {
      case 'project':
        return renderProjectItem();
      case 'member':
        return renderMemberItem();
      case 'log':
        return renderLogItem();
      default:
        return null;
    }
  };

  return (
    <div
      className='flex items-center space-x-2 px-1 py-1.5 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group shadow-sm hover:shadow-md'
      onClick={onClick}
    >
      {renderContent()}
    </div>
  );
}
