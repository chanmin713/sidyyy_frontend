# Radix UI 프로젝트

Radix UI를 사용한 현대적인 React 프론트엔드 프로젝트입니다.

## 🚀 기술 스택

- **React 18** - 사용자 인터페이스 라이브러리
- **TypeScript** - 타입 안전성을 위한 정적 타입 언어
- **Vite** - 빠른 개발 서버와 빌드 도구
- **Radix UI** - 접근성이 뛰어난 headless UI 컴포넌트
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **Lucide React** - 아이콘 라이브러리

## 📦 포함된 컴포넌트

### 기본 UI 컴포넌트
- **Button** - 다양한 스타일과 크기의 버튼
- **Card** - 콘텐츠를 담는 카드 컨테이너
- **Input** - 텍스트 입력 필드
- **Label** - 폼 요소의 라벨

### 폼 컴포넌트
- **Checkbox** - 체크박스 입력
- **Switch** - 토글 스위치
- **Select** - 드롭다운 선택 메뉴

### 레이아웃 컴포넌트
- **Dialog** - 모달 다이얼로그
- **Accordion** - 접을 수 있는 콘텐츠 섹션
- **Tabs** - 탭 인터페이스

### 피드백 컴포넌트
- **Toast** - 알림 메시지

## 🛠️ 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 프로덕션 빌드
```bash
npm run build
```

### 4. 빌드 미리보기
```bash
npm run preview
```

## 🎨 주요 특징

### 접근성 (Accessibility)
- WAI-ARIA 가이드라인 준수
- 키보드 네비게이션 지원
- 스크린 리더 호환성
- 포커스 관리

### 커스터마이징
- Tailwind CSS를 통한 완전한 스타일 커스터마이징
- CSS 변수를 활용한 테마 시스템
- 다크 모드 지원

### 개발자 경험
- TypeScript로 타입 안전성 보장
- Vite로 빠른 개발 서버
- ESLint를 통한 코드 품질 관리

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── ui/                 # 기본 UI 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   ├── accordion.tsx
│   │   ├── select.tsx
│   │   ├── toast.tsx
│   │   └── ...
│   ├── examples/           # 컴포넌트 예제
│   │   ├── ButtonExample.tsx
│   │   ├── FormExample.tsx
│   │   ├── DialogExample.tsx
│   │   └── ...
│   ├── Header.tsx
│   └── ComponentShowcase.tsx
├── lib/
│   └── utils.ts           # 유틸리티 함수
├── App.tsx
├── main.tsx
└── index.css
```

## 🎯 사용법

### 기본 버튼 사용
```tsx
import { Button } from '@/components/ui/button'

function MyComponent() {
  return (
    <div>
      <Button>기본 버튼</Button>
      <Button variant="outline">아웃라인 버튼</Button>
      <Button variant="destructive">삭제 버튼</Button>
    </div>
  )
}
```

### 다이얼로그 사용
```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>다이얼로그 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>제목</DialogTitle>
          <DialogDescription>설명</DialogDescription>
        </DialogHeader>
        {/* 다이얼로그 내용 */}
      </DialogContent>
    </Dialog>
  )
}
```

## 📚 추가 리소스

- [Radix UI 공식 문서](https://www.radix-ui.com/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Vite 문서](https://vitejs.dev/)
- [React 문서](https://react.dev/)

## 📄 라이선스

MIT License
