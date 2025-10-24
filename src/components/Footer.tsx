import { ChatBubbleIcon, InstagramLogoIcon, CheckIcon } from '@radix-ui/react-icons'

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Sidyyy</h3>
            <p className="text-sm text-gray-600">
              나만의 사이드 프로젝트를 자랑하고<br />
              함께 성장하는 개발자 커뮤니티
            </p>
            <div className="flex gap-3">
              <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700" href="#">
                <ChatBubbleIcon className="w-5 h-5" />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700" href="#">
                <InstagramLogoIcon className="w-5 h-5" />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700" href="#">
                <CheckIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 연락처 정보 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">문의하기</h3>
            <div className="space-y-3">
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-900 mb-1">이메일</p>
                <p>contact@sidyyy.com</p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-900 mb-1">카카오톡 오픈채팅</p>
                <p>sidyyy.kr/chat</p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-900 mb-1">GitHub</p>
                <p>github.com/sidyyy</p>
              </div>
            </div>
            <div className="pt-2">
              <ul className="space-y-1 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">이용약관</a></li>
                <li><a href="#" className="hover:text-gray-900">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="mt-8 pt-6">
          <div className="text-center text-sm text-gray-500">
            <p>© 2025. Sidyyy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
