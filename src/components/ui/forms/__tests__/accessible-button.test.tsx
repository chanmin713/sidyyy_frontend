import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AccessibleButton } from '../accessible-button';

describe('AccessibleButton', () => {
  it('기본 렌더링이 올바르게 작동한다', () => {
    render(<AccessibleButton>테스트 버튼</AccessibleButton>);

    expect(
      screen.getByRole('button', { name: /테스트 버튼/i })
    ).toBeInTheDocument();
  });

  it('클릭 이벤트를 올바르게 처리한다', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <AccessibleButton onClick={handleClick}>클릭하세요</AccessibleButton>
    );

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('키보드 이벤트를 올바르게 처리한다', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <AccessibleButton onClick={handleClick}>클릭하세요</AccessibleButton>
    );

    await user.keyboard('{Enter}');
    await user.keyboard(' ');

    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('다양한 variant가 올바르게 적용된다', () => {
    const { rerender } = render(
      <AccessibleButton variant='primary'>Primary</AccessibleButton>
    );
    expect(screen.getByRole('button')).toHaveClass('bg-blue-500');

    rerender(
      <AccessibleButton variant='secondary'>Secondary</AccessibleButton>
    );
    expect(screen.getByRole('button')).toHaveClass('bg-gray-200');

    rerender(<AccessibleButton variant='ghost'>Ghost</AccessibleButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');
  });

  it('다양한 size가 올바르게 적용된다', () => {
    const { rerender } = render(
      <AccessibleButton size='sm'>Small</AccessibleButton>
    );
    expect(screen.getByRole('button')).toHaveClass('px-3 py-1.5 text-sm');

    rerender(<AccessibleButton size='md'>Medium</AccessibleButton>);
    expect(screen.getByRole('button')).toHaveClass('px-4 py-2 text-base');

    rerender(<AccessibleButton size='lg'>Large</AccessibleButton>);
    expect(screen.getByRole('button')).toHaveClass('px-6 py-3 text-lg');
  });

  it('disabled 상태가 올바르게 작동한다', () => {
    render(<AccessibleButton disabled>Disabled</AccessibleButton>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('loading 상태가 올바르게 작동한다', () => {
    render(<AccessibleButton loading>Loading</AccessibleButton>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-wait');
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument(); // 스피너 아이콘
  });

  it('fullWidth prop이 올바르게 적용된다', () => {
    render(<AccessibleButton fullWidth>Full Width</AccessibleButton>);

    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('ARIA 속성이 올바르게 적용된다', () => {
    render(
      <AccessibleButton ariaLabel='테스트 라벨' ariaDescription='테스트 설명'>
        Test
      </AccessibleButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', '테스트 라벨');
    expect(button).toHaveAttribute('aria-describedby');
  });

  it('커스텀 className이 올바르게 적용된다', () => {
    render(<AccessibleButton className='custom-class'>Test</AccessibleButton>);

    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});
