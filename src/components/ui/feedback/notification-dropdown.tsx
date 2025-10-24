import React from 'react';
import { BellIcon, CheckIcon } from '@radix-ui/react-icons';
import { useNotifications } from '@/stores';
import { useNotificationHandling, useDropdown } from '@/hooks';
import { getNotificationIcon } from '@/utils';
import { AccessibleButton } from '../forms/accessible-button';

interface NotificationDropdownProps {
  className?: string;
}

export function NotificationDropdown({
  className = '',
}: NotificationDropdownProps) {
  const { notifications, unreadCount, markAsRead, markAllAsRead } =
    useNotifications();
  const { displayNotifications } = useNotificationHandling(notifications);
  const { isOpen, isClosing, dropdownRef, handleToggle } = useDropdown();

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <AccessibleButton
        onClick={handleToggle}
        variant='ghost'
        className='w-8 h-8 p-0 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-sm group relative'
        ariaLabel='알림'
      >
        <BellIcon className='w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300' />
        {unreadCount > 0 && (
          <span className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium'>
            {unreadCount}
          </span>
        )}
      </AccessibleButton>

      {isOpen && (
        <div
          className={`absolute right-0 top-10 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-200 ${
            isClosing
              ? 'animate-out fade-out-0 slide-out-to-top-2'
              : 'animate-in fade-in-0 slide-in-from-top-2'
          }`}
        >
          {/* 헤더 */}
          <div className='p-4 border-b border-gray-100'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-semibold text-gray-900'>알림</h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className='text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200'
                >
                  모두 읽음
                </button>
              )}
            </div>
          </div>

          {/* 알림 목록 */}
          <div className='max-h-96 overflow-y-auto'>
            {displayNotifications.length > 0 ? (
              displayNotifications.map(notification => (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${
                    !notification.isRead ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className='flex items-start gap-3'>
                    <div className='flex-shrink-0 mt-0.5'>
                      {React.createElement(
                        getNotificationIcon(notification.type),
                        {
                          className: 'w-4 h-4',
                        }
                      )}
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-center gap-2'>
                        <h4 className='text-sm font-medium text-gray-900 truncate'>
                          {notification.title}
                        </h4>
                        {!notification.isRead && (
                          <div className='w-2 h-2 bg-blue-500 rounded-full flex-shrink-0'></div>
                        )}
                      </div>
                      <p className='text-sm text-gray-600 mt-1 line-clamp-2'>
                        {notification.content}
                      </p>
                      <p className='text-xs text-gray-400 mt-2'>
                        {notification.time}
                      </p>
                    </div>
                    {!notification.isRead && (
                      <CheckIcon className='w-4 h-4 text-blue-500 flex-shrink-0' />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className='p-8 text-center text-gray-500'>
                <BellIcon className='w-12 h-12 mx-auto mb-3 text-gray-300' />
                <p>새로운 알림이 없습니다</p>
              </div>
            )}
          </div>

          {/* 푸터 */}
          <div className='p-4 border-t border-gray-100'>
            <button className='w-full text-center text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200'>
              모든 알림 보기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
