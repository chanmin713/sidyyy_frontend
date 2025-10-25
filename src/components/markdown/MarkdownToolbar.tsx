import { memo, useState } from 'react';
import {
  Bold,
  Italic,
  Code,
  Code2,
  Calculator,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link,
  Minus,
  Strikethrough,
  Underline,
  Highlighter,
  Table,
  CheckSquare,
} from 'lucide-react';

interface MarkdownToolbarProps {
  onInsert: (text: string, selection?: { start: number; end: number }) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}

export const MarkdownToolbar = memo(function MarkdownToolbar({
  onInsert,
  textareaRef,
}: MarkdownToolbarProps) {
  const [showTableDropdown, setShowTableDropdown] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);

  const insertText = (
    before: string,
    after: string = '',
    placeholder: string = ''
  ) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const textToInsert = selectedText || placeholder;

    const newText = before + textToInsert + after;
    const newStart = start + before.length;
    const newEnd = newStart + textToInsert.length;

    onInsert(newText, { start: newStart, end: newEnd });
  };

  const insertTable = () => {
    // 헤더 행 생성
    const headerRow =
      '| ' +
      Array(tableCols)
        .fill(0)
        .map((_, i) => `제목 ${i + 1}`)
        .join(' | ') +
      ' |';
    const separatorRow =
      '|' + Array(tableCols).fill('--------').join('|') + '|';

    // 데이터 행들 생성
    const dataRows = Array(tableRows)
      .fill(0)
      .map((_, rowIndex) => {
        const cells = Array(tableCols)
          .fill(0)
          .map((_, colIndex) => `셀 ${rowIndex + 1}-${colIndex + 1}`);
        return '| ' + cells.join(' | ') + ' |';
      });

    const tableMarkdown = [headerRow, separatorRow, ...dataRows].join('\n');

    onInsert(tableMarkdown);
    setShowTableDropdown(false);
  };

  const handleTableButtonClick = () => {
    setShowTableDropdown(!showTableDropdown);
  };

  const toolbarButtons = [
    {
      icon: Bold,
      action: () => insertText('**', '**', '굵은 텍스트'),
      title: '굵게 (Ctrl+B)',
    },
    {
      icon: Italic,
      action: () => insertText('*', '*', '기울임 텍스트'),
      title: '기울임 (Ctrl+I)',
    },
    {
      icon: Strikethrough,
      action: () => insertText('~~', '~~', '취소선 텍스트'),
      title: '취소선',
    },
    {
      icon: Underline,
      action: () => insertText('<u>', '</u>', '밑줄 텍스트'),
      title: '밑줄',
    },
    {
      icon: Highlighter,
      action: () => insertText('<mark>', '</mark>', '하이라이트 텍스트'),
      title: '하이라이트',
    },
    {
      icon: Code,
      action: () => insertText('`', '`', '코드'),
      title: '인라인 코드',
    },
    {
      icon: Code2,
      action: () => insertText('\n```\n', '\n```\n', '코드 블럭'),
      title: '코드 블럭',
    },
    {
      icon: Calculator,
      action: () => insertText('$', '$', '수식'),
      title: '인라인 수식',
    },
    {
      icon: Heading1,
      action: () => insertText('# ', '', '제목 1'),
      title: '제목 1',
    },
    {
      icon: Heading2,
      action: () => insertText('## ', '', '제목 2'),
      title: '제목 2',
    },
    {
      icon: Heading3,
      action: () => insertText('### ', '', '제목 3'),
      title: '제목 3',
    },
    {
      icon: List,
      action: () => insertText('- ', '', '리스트 항목'),
      title: '글머리 기호 목록',
    },
    {
      icon: ListOrdered,
      action: () => insertText('1. ', '', '번호 목록'),
      title: '번호 목록',
    },
    {
      icon: CheckSquare,
      action: () => insertText('- [ ] ', '', '체크박스 항목'),
      title: '체크박스',
    },
    {
      icon: Table,
      action: handleTableButtonClick,
      title: '테이블',
    },
    {
      icon: Quote,
      action: () => insertText('> ', '', '인용문'),
      title: '인용문',
    },
    {
      icon: Link,
      action: () => insertText('[', '](URL)', '링크 텍스트'),
      title: '링크',
    },
    {
      icon: Minus,
      action: () => insertText('\n\n---\n\n', ''),
      title: '구분선',
    },
  ];

  return (
    <div className='relative'>
      <div className='flex flex-wrap gap-1 p-2 bg-gray-50 border border-gray-300 border-b-0 rounded-t-lg'>
        {toolbarButtons.map((button, index) => (
          <button
            key={index}
            type='button'
            onClick={button.action}
            title={button.title}
            className={`flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              button.title === '테이블' && showTableDropdown
                ? 'bg-gray-200'
                : ''
            }`}
          >
            <button.icon className='w-4 h-4' />
          </button>
        ))}
      </div>

      {/* 테이블 드롭다운 */}
      {showTableDropdown && (
        <div className='absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10 min-w-[200px]'>
          <div className='space-y-3'>
            <h3 className='text-sm font-medium text-gray-900'>
              테이블 크기 선택
            </h3>

            <div className='space-y-2'>
              <label className='block text-xs text-gray-600'>행 개수</label>
              <select
                value={tableRows}
                onChange={e => setTableRows(parseInt(e.target.value))}
                className='w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>
                    {num}행
                  </option>
                ))}
              </select>
            </div>

            <div className='space-y-2'>
              <label className='block text-xs text-gray-600'>열 개수</label>
              <select
                value={tableCols}
                onChange={e => setTableCols(parseInt(e.target.value))}
                className='w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>
                    {num}열
                  </option>
                ))}
              </select>
            </div>

            <div className='flex gap-2 pt-2'>
              <button
                onClick={insertTable}
                className='flex-1 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors'
              >
                삽입
              </button>
              <button
                onClick={() => setShowTableDropdown(false)}
                className='flex-1 px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors'
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default MarkdownToolbar;
