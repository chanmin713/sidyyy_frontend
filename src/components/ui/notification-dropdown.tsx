import { useState, useRef, useEffect } from 'react'
import { BellIcon, CheckIcon, HeartIcon, ChatBubbleIcon, PersonIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons'

interface Notification {
  id: string
  title: string
  content: string
  time: string
  isRead: boolean
  type: 'like' | 'comment' | 'follow' | 'mention'
}

interface NotificationDropdownProps {
  className?: string
}

export function NotificationDropdown({ className = '' }: NotificationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: '좋아요 알림',
      content: '김개발님이 당신의 "React 프로젝트 완성!" 포스트를 좋아합니다',
      time: '5분 전',
      isRead: false,
      type: 'like'
    },
    {
      id: '2',
      title: '댓글 알림',
      content: '박프론트님이 "TypeScript 질문있습니다"에 댓글을 남겼습니다',
      time: '1시간 전',
      isRead: false,
      type: 'comment'
    },
    {
      id: '3',
      title: '팔로우 알림',
      content: '이백엔드님이 당신을 팔로우했습니다',
      time: '3시간 전',
      isRead: true,
      type: 'follow'
    },
    {
      id: '4',
      title: '멘션 알림',
      content: '최풀스택님이 댓글에서 당신을 멘션했습니다',
      time: '1일 전',
      isRead: true,
      type: 'mention'
    },
    {
      id: '5',
      title: '좋아요 알림',
      content: '정데이터님이 당신의 "Next.js 14 업데이트" 포스트를 좋아합니다',
      time: '2일 전',
      isRead: true,
      type: 'like'
    }
  ])
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsClosing(true)
          setTimeout(() => {
            setIsOpen(false)
            setIsClosing(false)
          }, 200)
        }
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const unreadCount = notifications.filter(n => !n.isRead).length

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    )
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <HeartIcon className="w-4 h-4 text-red-500" />
      case 'comment':
        return <ChatBubbleIcon className="w-4 h-4 text-blue-500" />
      case 'follow':
        return <PersonIcon className="w-4 h-4 text-green-500" />
      case 'mention':
        return <ExclamationTriangleIcon className="w-4 h-4 text-orange-500" />
      default:
        return <BellIcon className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button 
        onClick={() => {
          if (isOpen) {
            setIsClosing(true)
            setTimeout(() => {
              setIsOpen(false)
              setIsClosing(false)
            }, 200)
          } else {
            setIsOpen(true)
          }
        }}
        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-sm group relative"
      >
        <BellIcon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className={`absolute right-0 top-10 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-200 ${
          isClosing 
            ? 'animate-out fade-out-0 slide-out-to-top-2' 
            : 'animate-in fade-in-0 slide-in-from-top-2'
        }`}>
          {/* 헤더 */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">알림</h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  모두 읽음
                </button>
              )}
            </div>
          </div>

          {/* 알림 목록 */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${
                    !notification.isRead ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {notification.title}
                        </h4>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {notification.content}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        {notification.time}
                      </p>
                    </div>
                    {!notification.isRead && (
                      <CheckIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                <BellIcon className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>새로운 알림이 없습니다</p>
              </div>
            )}
          </div>

          {/* 푸터 */}
          <div className="p-4 border-t border-gray-100">
            <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
              모든 알림 보기
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
