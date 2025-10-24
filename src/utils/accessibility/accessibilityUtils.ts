/**
 * 접근성 관련 유틸리티 함수들
 */

/**
 * ARIA 라벨을 생성합니다
 * @param label - 기본 라벨
 * @param description - 추가 설명 (선택사항)
 * @returns ARIA 라벨 문자열
 */
export const createAriaLabel = (
  label: string,
  description?: string
): string => {
  return description ? `${label}, ${description}` : label;
};

/**
 * 키보드 네비게이션을 위한 키 코드 상수
 */
export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const;

/**
 * 키보드 이벤트가 액션을 트리거하는지 확인합니다
 * @param event - 키보드 이벤트
 * @returns 액션 트리거 여부
 */
export const isActionKey = (event: React.KeyboardEvent): boolean => {
  return event.key === KEYBOARD_KEYS.ENTER || event.key === KEYBOARD_KEYS.SPACE;
};

/**
 * 키보드 이벤트가 네비게이션 키인지 확인합니다
 * @param event - 키보드 이벤트
 * @returns 네비게이션 키 여부
 */
export const isNavigationKey = (event: React.KeyboardEvent): boolean => {
  return [
    KEYBOARD_KEYS.ARROW_UP,
    KEYBOARD_KEYS.ARROW_DOWN,
    KEYBOARD_KEYS.ARROW_LEFT,
    KEYBOARD_KEYS.ARROW_RIGHT,
    KEYBOARD_KEYS.HOME,
    KEYBOARD_KEYS.END,
  ].includes(event.key as any);
};

/**
 * 포커스 가능한 요소들을 찾습니다
 * @param container - 검색할 컨테이너
 * @returns 포커스 가능한 요소들
 */
export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
    '[role="button"]:not([disabled])',
    '[role="tab"]:not([disabled])',
    '[role="menuitem"]:not([disabled])',
  ].join(', ');

  return Array.from(container.querySelectorAll(focusableSelectors));
};

/**
 * 포커스 트랩을 구현합니다
 * @param container - 포커스를 트랩할 컨테이너
 * @param firstFocusable - 첫 번째 포커스 가능한 요소
 * @param lastFocusable - 마지막 포커스 가능한 요소
 */
export const trapFocus = (
  container: HTMLElement,
  firstFocusable: HTMLElement,
  lastFocusable: HTMLElement
) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === KEYBOARD_KEYS.TAB) {
      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  };

  container.addEventListener('keydown', handleKeyDown);
  return () => container.removeEventListener('keydown', handleKeyDown);
};

/**
 * 스크린 리더를 위한 숨김 텍스트를 생성합니다
 * @param text - 숨김 텍스트
 * @returns HTML 문자열
 */
export const createScreenReaderText = (text: string): string => {
  return `<span class="sr-only" aria-live="polite">${text}</span>`;
};

/**
 * ARIA 상태를 관리하는 훅을 위한 타입
 */
export interface AriaState {
  expanded?: boolean;
  selected?: boolean;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
}

/**
 * ARIA 속성을 생성합니다
 * @param state - ARIA 상태
 * @param options - 추가 옵션
 * @returns ARIA 속성 객체
 */
export const createAriaAttributes = (
  state: AriaState,
  options: {
    id?: string;
    label?: string;
    description?: string;
    controls?: string;
    describedBy?: string;
    labelledBy?: string;
  } = {}
) => {
  const attributes: Record<string, any> = {};

  if (state.expanded !== undefined) {
    attributes['aria-expanded'] = state.expanded;
  }
  if (state.selected !== undefined) {
    attributes['aria-selected'] = state.selected;
  }
  if (state.checked !== undefined) {
    attributes['aria-checked'] = state.checked;
  }
  if (state.disabled !== undefined) {
    attributes['aria-disabled'] = state.disabled;
  }
  if (state.required !== undefined) {
    attributes['aria-required'] = state.required;
  }
  if (state.invalid !== undefined) {
    attributes['aria-invalid'] = state.invalid;
  }

  if (options.id) {
    attributes.id = options.id;
  }
  if (options.label) {
    attributes['aria-label'] = options.label;
  }
  if (options.description) {
    attributes['aria-describedby'] = options.description;
  }
  if (options.controls) {
    attributes['aria-controls'] = options.controls;
  }
  if (options.describedBy) {
    attributes['aria-describedby'] = options.describedBy;
  }
  if (options.labelledBy) {
    attributes['aria-labelledby'] = options.labelledBy;
  }

  return attributes;
};
