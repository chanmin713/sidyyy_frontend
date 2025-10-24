import { MobileFooter } from './MobileFooter';
import { DesktopFooter } from './DesktopFooter';

export function Footer() {
  return (
    <>
      {/* 모바일 푸터 */}
      <div className='md:hidden'>
        <MobileFooter />
      </div>

      {/* 데스크톱 푸터 */}
      <div className='hidden md:block'>
        <DesktopFooter />
      </div>
    </>
  );
}
