import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';

export function Header() {
  return (
    <>
      {/* 모바일 헤더 - md 미만에서만 표시 */}
      <div className='md:hidden'>
        <MobileHeader />
      </div>

      {/* 데스크톱 헤더 - md 이상에서만 표시 */}
      <div className='hidden md:block'>
        <DesktopHeader />
      </div>
    </>
  );
}
