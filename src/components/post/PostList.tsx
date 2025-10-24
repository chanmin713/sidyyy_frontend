import { useState, useMemo, useCallback } from 'react'
import { PostCard } from './PostCard'
import { samplePosts } from '@/data/samplePosts'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { Dropdown } from '@/components/ui/dropdown'
import { ToggleGroup, ToggleItem, ToggleButton, ToggleBackground } from '@/components/ui/toggle-group'
import { CheckboxGroup, CheckboxItem } from '@/components/ui/checkbox-group'
import { IconButton } from '@/components/ui/icon-button'
import { SearchButton } from '@/components/ui/search-button'
import { CATEGORIES, SORT_OPTIONS, FILTER_OPTIONS, SPACING } from '@/constants'
import type { SortOption, FilterOption } from '@/types'

export function PostList() {
  const [sortBy, setSortBy] = useState<SortOption>(SORT_OPTIONS.POPULAR)
  const [filterBy, setFilterBy] = useState<FilterOption>(FILTER_OPTIONS.ALL)
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null)
  const [hoveredSort, setHoveredSort] = useState<string | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  // 검색 및 필터링된 포스트 목록 (성능 최적화)
  const filteredPosts = useMemo(() => {
    return samplePosts.filter(post => {
      // 검색 쿼리 필터링
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesContent = post.content.toLowerCase().includes(query)
        const matchesAuthor = post.author.toLowerCase().includes(query)
        const matchesHashtags = post.hashtags?.some(tag => tag.toLowerCase().includes(query)) || false
        const matchesCategory = post.category?.toLowerCase().includes(query)
        
        if (!matchesContent && !matchesAuthor && !matchesHashtags && !matchesCategory) {
          return false
        }
      }
      
      // 카테고리 필터링
      if (selectedCategories.length > 0 && post.category) {
        if (!selectedCategories.includes(post.category)) {
          return false
        }
      }
      
      return true
    })
  }, [searchQuery, selectedCategories])

  // 성능 최적화: 콜백 함수들 메모이제이션
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const handleFilterChange = useCallback((value: FilterOption) => {
    setFilterBy(value)
  }, [])

  const handleSortChange = useCallback((value: SortOption) => {
    setSortBy(value)
  }, [])

  const handleCategoryChange = useCallback((values: string[]) => {
    setSelectedCategories(values)
  }, [])

  const handleClearCategories = useCallback(() => {
    setSelectedCategories([])
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 정렬 및 필터 탭 */}
      <div className="sticky top-[69px] bg-white border-b border-gray-100 z-40">
        <div className={`${SPACING.CONTAINER_PADDING} ${SPACING.HEADER_PADDING} ${SPACING.HEADER_HEIGHT} flex items-center`}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
            {/* 필터 탭 */}
            <ToggleGroup<FilterOption> value={filterBy} onValueChange={handleFilterChange}>
              <ToggleBackground 
                value={filterBy} 
                currentValue={filterBy} 
                hoveredValue={hoveredFilter} 
              />
              <ToggleItem value="all">
                <ToggleButton
                  value="all"
                  currentValue={filterBy}
                  onValueChange={handleFilterChange}
                  onMouseEnter={() => setHoveredFilter('all')}
                  onMouseLeave={() => setHoveredFilter(null)}
                >
                  전체글
                </ToggleButton>
              </ToggleItem>
              <ToggleItem value="following">
                <ToggleButton
                  value="following"
                  currentValue={filterBy}
                  onValueChange={handleFilterChange}
                  onMouseEnter={() => setHoveredFilter('following')}
                  onMouseLeave={() => setHoveredFilter(null)}
                >
                  팔로잉
                </ToggleButton>
              </ToggleItem>
            </ToggleGroup>
            </div>

            {/* 검색 버튼과 필터 아이콘 */}
            <div className="flex items-center gap-1 ml-auto">
              <SearchButton 
                onSearch={handleSearch}
                className="min-w-96"
              />
            <Dropdown
              trigger={
                <IconButton
                  onClick={() => {}}
                  isActive={isFilterOpen}
                >
                  <MixerHorizontalIcon className={`w-5 h-5 transition-colors duration-300 ${
                    isFilterOpen 
                      ? 'text-white' 
                      : 'text-gray-600 group-hover:text-gray-900'
                  }`} />
                </IconButton>
              }
              onOpenChange={setIsFilterOpen}
            >
              <div className="p-4">
                {/* 정렬 옵션 */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">정렬</h3>
                  <ToggleGroup<SortOption> value={sortBy} onValueChange={handleSortChange}>
                    <ToggleBackground 
                      value={sortBy} 
                      currentValue={sortBy} 
                      hoveredValue={hoveredSort} 
                    />
                    <ToggleItem value="latest">
                      <ToggleButton
                        value="latest"
                        currentValue={sortBy}
                        onValueChange={handleSortChange}
                        onMouseEnter={() => setHoveredSort('latest')}
                        onMouseLeave={() => setHoveredSort(null)}
                      >
                        최신순
                      </ToggleButton>
                    </ToggleItem>
                    <ToggleItem value="popular">
                      <ToggleButton
                        value="popular"
                        currentValue={sortBy}
                        onValueChange={handleSortChange}
                        onMouseEnter={() => setHoveredSort('popular')}
                        onMouseLeave={() => setHoveredSort(null)}
                      >
                        인기순
                      </ToggleButton>
                    </ToggleItem>
                  </ToggleGroup>
                </div>

                {/* 카테고리 필터 */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">카테고리</h3>
                  <CheckboxGroup values={selectedCategories} onValuesChange={handleCategoryChange}>
                    {CATEGORIES.map((category) => (
                      <CheckboxItem
                        key={category}
                        value={category}
                        values={selectedCategories}
                        onValuesChange={handleCategoryChange}
                      >
                        {category}
                      </CheckboxItem>
                    ))}
                  </CheckboxGroup>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <button
                      onClick={handleClearCategories}
                      className="text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md px-2 py-1 -mx-2 transition-colors duration-150"
                    >
                      모두 해제
                    </button>
                  </div>
                </div>
              </div>
            </Dropdown>
            </div>
          </div>
        </div>
      </div>

      {/* 포스트 목록 */}
      <div className={SPACING.CONTAINER_PADDING}>
        {filteredPosts.map((post, index) => (
          <PostCard
            key={index}
            author={post.author}
            timestamp={post.timestamp}
            content={post.content}
            hashtags={post.hashtags}
            likes={post.likes}
            comments={post.comments}
            hasImage={post.hasImage}
            isFirst={index === 0}
            isLast={index === filteredPosts.length - 1}
            category={post.category}
          />
        ))}
      </div>
    </div>
  )
}

