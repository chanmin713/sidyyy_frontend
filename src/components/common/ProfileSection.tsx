import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonIcon } from '@radix-ui/react-icons';

interface ProfileSectionProps {
  author: string;
  authorRole?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ProfileSection = memo(function ProfileSection({
  author,
  authorRole,
  size = 'md',
  className = '',
}: ProfileSectionProps) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/user/${encodeURIComponent(author)}`);
  };
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'w-6 h-6',
          icon: 'w-3 h-3',
          name: 'text-xs',
          role: 'text-xs',
        };
      case 'md':
        return {
          container: 'w-8 h-8',
          icon: 'w-4 h-4',
          name: 'text-sm',
          role: 'text-xs',
        };
      case 'lg':
        return {
          container: 'w-10 h-10',
          icon: 'w-5 h-5',
          name: 'text-base',
          role: 'text-sm',
        };
      default:
        return {
          container: 'w-8 h-8',
          icon: 'w-4 h-4',
          name: 'text-sm',
          role: 'text-xs',
        };
    }
  };

  const styles = getSizeStyles();

  return (
    <div
      onClick={handleProfileClick}
      className={`inline-flex items-center gap-3 group hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors cursor-pointer ${className}`}
    >
      <div
        className={`${styles.container} rounded-full flex items-center justify-center border-2 border-gray-300 group-hover:border-gray-400 transition-colors flex-shrink-0`}
      >
        <PersonIcon
          className={`${styles.icon} text-gray-500 group-hover:text-gray-700 transition-colors`}
        />
      </div>
      <div className='flex flex-col flex-shrink-0'>
        <p
          className={`font-semibold group-hover:underline whitespace-nowrap ${styles.name}`}
        >
          {author}
        </p>
        {authorRole && (
          <p
            className={`text-gray-500 group-hover:text-gray-700 transition-colors whitespace-nowrap ${styles.role}`}
          >
            {authorRole}
          </p>
        )}
      </div>
    </div>
  );
});
