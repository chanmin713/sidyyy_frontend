/**
 * 상태 정규화를 위한 유틸리티 함수들
 */

/**
 * 정규화된 상태 구조
 */
export interface NormalizedState<T> {
  byId: Record<string, T>;
  allIds: string[];
}

/**
 * 배열을 정규화된 상태로 변환
 * @param items - 정규화할 배열
 * @param getId - ID 추출 함수
 * @returns 정규화된 상태
 */
export function normalizeArray<T>(
  items: T[],
  getId: (item: T) => string
): NormalizedState<T> {
  const byId: Record<string, T> = {};
  const allIds: string[] = [];

  items.forEach(item => {
    const id = getId(item);
    byId[id] = item;
    allIds.push(id);
  });

  return { byId, allIds };
}

/**
 * 정규화된 상태에서 아이템 가져오기
 * @param state - 정규화된 상태
 * @param id - 아이템 ID
 * @returns 아이템 또는 undefined
 */
export function getItemById<T>(
  state: NormalizedState<T>,
  id: string
): T | undefined {
  return state.byId[id];
}

/**
 * 정규화된 상태에서 여러 아이템 가져오기
 * @param state - 정규화된 상태
 * @param ids - 아이템 ID 배열
 * @returns 아이템 배열
 */
export function getItemsByIds<T>(
  state: NormalizedState<T>,
  ids: string[]
): T[] {
  return ids
    .map(id => state.byId[id])
    .filter((item): item is T => item !== undefined);
}

/**
 * 정규화된 상태에서 모든 아이템 가져오기
 * @param state - 정규화된 상태
 * @returns 아이템 배열
 */
export function getAllItems<T>(state: NormalizedState<T>): T[] {
  return state.allIds.map(id => state.byId[id]);
}

/**
 * 정규화된 상태에 아이템 추가
 * @param state - 현재 상태
 * @param item - 추가할 아이템
 * @param getId - ID 추출 함수
 * @returns 새로운 상태
 */
export function addItem<T>(
  state: NormalizedState<T>,
  item: T,
  getId: (item: T) => string
): NormalizedState<T> {
  const id = getId(item);

  if (state.byId[id]) {
    // 이미 존재하는 경우 업데이트
    return {
      ...state,
      byId: {
        ...state.byId,
        [id]: item,
      },
    };
  }

  // 새로운 아이템 추가
  return {
    byId: {
      ...state.byId,
      [id]: item,
    },
    allIds: [...state.allIds, id],
  };
}

/**
 * 정규화된 상태에서 아이템 업데이트
 * @param state - 현재 상태
 * @param id - 업데이트할 아이템 ID
 * @param updates - 업데이트할 부분
 * @returns 새로운 상태
 */
export function updateItem<T>(
  state: NormalizedState<T>,
  id: string,
  updates: Partial<T>
): NormalizedState<T> {
  const existingItem = state.byId[id];

  if (!existingItem) {
    return state;
  }

  return {
    ...state,
    byId: {
      ...state.byId,
      [id]: { ...existingItem, ...updates },
    },
  };
}

/**
 * 정규화된 상태에서 아이템 제거
 * @param state - 현재 상태
 * @param id - 제거할 아이템 ID
 * @returns 새로운 상태
 */
export function removeItem<T>(
  state: NormalizedState<T>,
  id: string
): NormalizedState<T> {
  const byId = { ...state.byId };
  delete byId[id];

  return {
    byId,
    allIds: state.allIds.filter(itemId => itemId !== id),
  };
}

/**
 * 정규화된 상태에서 여러 아이템 제거
 * @param state - 현재 상태
 * @param ids - 제거할 아이템 ID 배열
 * @returns 새로운 상태
 */
export function removeItems<T>(
  state: NormalizedState<T>,
  ids: string[]
): NormalizedState<T> {
  const byId = { ...state.byId };
  const allIds = [...state.allIds];

  ids.forEach(id => {
    delete byId[id];
  });

  return {
    byId,
    allIds: allIds.filter(id => !ids.includes(id)),
  };
}

/**
 * 정규화된 상태에서 아이템 순서 변경
 * @param state - 현재 상태
 * @param fromIndex - 이동할 아이템의 현재 인덱스
 * @param toIndex - 이동할 목표 인덱스
 * @returns 새로운 상태
 */
export function reorderItems<T>(
  state: NormalizedState<T>,
  fromIndex: number,
  toIndex: number
): NormalizedState<T> {
  const newAllIds = [...state.allIds];
  const [movedId] = newAllIds.splice(fromIndex, 1);
  newAllIds.splice(toIndex, 0, movedId);

  return {
    ...state,
    allIds: newAllIds,
  };
}

/**
 * 정규화된 상태에서 필터링
 * @param state - 현재 상태
 * @param predicate - 필터 조건
 * @returns 필터링된 아이템 배열
 */
export function filterItems<T>(
  state: NormalizedState<T>,
  predicate: (item: T) => boolean
): T[] {
  return state.allIds.map(id => state.byId[id]).filter(predicate);
}

/**
 * 정규화된 상태에서 정렬
 * @param state - 현재 상태
 * @param compareFn - 비교 함수
 * @returns 정렬된 아이템 배열
 */
export function sortItems<T>(
  state: NormalizedState<T>,
  compareFn: (a: T, b: T) => number
): T[] {
  return state.allIds.map(id => state.byId[id]).sort(compareFn);
}

/**
 * 정규화된 상태에서 검색
 * @param state - 현재 상태
 * @param query - 검색 쿼리
 * @param searchFields - 검색할 필드들
 * @returns 검색 결과 아이템 배열
 */
export function searchItems<T>(
  state: NormalizedState<T>,
  query: string,
  searchFields: (keyof T)[]
): T[] {
  const lowercaseQuery = query.toLowerCase();

  return state.allIds
    .map(id => state.byId[id])
    .filter(item =>
      searchFields.some(field => {
        const value = item[field];
        return (
          value &&
          typeof value === 'string' &&
          value.toLowerCase().includes(lowercaseQuery)
        );
      })
    );
}

/**
 * 정규화된 상태에서 페이지네이션
 * @param state - 현재 상태
 * @param page - 페이지 번호 (0부터 시작)
 * @param pageSize - 페이지 크기
 * @returns 페이지네이션된 아이템 배열과 메타데이터
 */
export function paginateItems<T>(
  state: NormalizedState<T>,
  page: number,
  pageSize: number
): {
  items: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
} {
  const totalItems = state.allIds.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;

  const items = state.allIds
    .slice(startIndex, endIndex)
    .map(id => state.byId[id]);

  return {
    items,
    totalItems,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages - 1,
    hasPreviousPage: page > 0,
  };
}
