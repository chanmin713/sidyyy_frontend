import { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownPreviewProps {
  content: string;
  className?: string;
}

export const MarkdownPreview = memo(function MarkdownPreview({
  content,
  className = '',
}: MarkdownPreviewProps) {
  if (!content.trim()) {
    return (
      <div className={`text-gray-400 text-center py-8 ${className}`}>
        <div className='text-4xl mb-2'>📝</div>
        <p>마크다운을 입력하면 미리보기가 여기에 표시됩니다</p>
      </div>
    );
  }

  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // 코드 블록 스타일링
          code: ({ inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code
                  className='bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono'
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <pre className='bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto'>
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },
          // 링크 스타일링
          a: ({ href, children }) => (
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:text-blue-800 underline'
            >
              {children}
            </a>
          ),
          // 제목 스타일링
          h1: ({ children }) => (
            <h1 className='text-2xl font-bold text-gray-900 mb-4 mt-6 first:mt-0'>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className='text-xl font-bold text-gray-900 mb-3 mt-5 first:mt-0'>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className='text-lg font-semibold text-gray-900 mb-2 mt-4 first:mt-0'>
              {children}
            </h3>
          ),
          // 리스트 스타일링
          ul: ({ children }) => (
            <ul className='list-disc list-inside mb-4 space-y-1'>{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className='list-decimal list-inside mb-4 space-y-1'>
              {children}
            </ol>
          ),
          // 인용문 스타일링
          blockquote: ({ children }) => (
            <blockquote className='border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4'>
              {children}
            </blockquote>
          ),
          // 테이블 스타일링
          table: ({ children }) => (
            <div className='overflow-x-auto mb-4'>
              <table className='min-w-full border border-gray-300 rounded-lg'>
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className='border border-gray-300 bg-gray-50 px-3 py-2 text-left font-semibold'>
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className='border border-gray-300 px-3 py-2'>{children}</td>
          ),
          // 구분선 스타일링
          hr: () => <hr className='border-gray-300 my-6' />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
});

export default MarkdownPreview;
