import { ChatBubbleIcon, InstagramLogoIcon, CheckIcon } from '@radix-ui/react-icons'

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-gray-500 mb-4">© 2025. Sidyyy</p>
          <div className="flex justify-center gap-4">
            <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-sm" href="#">
              <ChatBubbleIcon className="w-6 h-6" />
            </a>
            <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-sm" href="#">
              <InstagramLogoIcon className="w-6 h-6" />
            </a>
            <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-sm" href="#">
              <CheckIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
