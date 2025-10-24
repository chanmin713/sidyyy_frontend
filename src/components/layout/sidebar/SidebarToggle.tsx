import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { AccessibleButton } from '@/components/ui/forms/accessible-button';

interface SidebarToggleProps {
  showAll: boolean;
  onToggle: () => void;
}

export function SidebarToggle({ showAll, onToggle }: SidebarToggleProps) {
  return (
    <div className='mt-3 flex justify-end'>
      <AccessibleButton
        onClick={onToggle}
        variant='ghost'
        size='sm'
        className='text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1'
        ariaLabel={showAll ? '목록 접기' : '더 많은 항목 보기'}
      >
        {showAll ? (
          <>
            <ChevronUpIcon className='w-3 h-3' />
            접기
          </>
        ) : (
          <>
            <ChevronDownIcon className='w-3 h-3' />
            더보기
          </>
        )}
      </AccessibleButton>
    </div>
  );
}
