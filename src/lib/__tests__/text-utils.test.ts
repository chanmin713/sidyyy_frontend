import { 
  getLineCount, 
  shouldTruncateText, 
  truncateText, 
  getWordCount, 
  getCharacterCount, 
  getReadingTime 
} from '../text-utils'

describe('text-utils', () => {
  describe('getLineCount', () => {
    it('should return correct line count', () => {
      expect(getLineCount('single line')).toBe(1)
      expect(getLineCount('line1\nline2')).toBe(2)
      expect(getLineCount('line1\nline2\nline3')).toBe(3)
      expect(getLineCount('')).toBe(1) // empty string has 1 line
    })
  })

  describe('shouldTruncateText', () => {
    it('should return true when text exceeds max lines', () => {
      const longText = 'line1\nline2\nline3\nline4\nline5\nline6\nline7\nline8\nline9\nline10\nline11'
      expect(shouldTruncateText(longText, 10)).toBe(true)
    })

    it('should return false when text is within max lines', () => {
      const shortText = 'line1\nline2\nline3'
      expect(shouldTruncateText(shortText, 10)).toBe(false)
    })

    it('should use default max lines of 10', () => {
      const text = 'line1\nline2\nline3\nline4\nline5\nline6\nline7\nline8\nline9\nline10\nline11'
      expect(shouldTruncateText(text)).toBe(true)
    })
  })

  describe('truncateText', () => {
    it('should truncate text when exceeding max lines', () => {
      const longText = 'line1\nline2\nline3\nline4\nline5\nline6\nline7\nline8\nline9\nline10\nline11'
      const result = truncateText(longText, 10)
      
      expect(result.shouldTruncate).toBe(true)
      expect(result.lineCount).toBe(11)
      expect(result.maxLines).toBe(10)
      expect(result.truncatedText).toBe('line1\nline2\nline3\nline4\nline5\nline6\nline7\nline8\nline9\nline10')
    })

    it('should not truncate when within max lines', () => {
      const shortText = 'line1\nline2\nline3'
      const result = truncateText(shortText, 10)
      
      expect(result.shouldTruncate).toBe(false)
      expect(result.lineCount).toBe(3)
      expect(result.truncatedText).toBe(shortText)
    })
  })

  describe('getWordCount', () => {
    it('should return correct word count', () => {
      expect(getWordCount('hello world')).toBe(2)
      expect(getWordCount('hello   world   test')).toBe(3)
      expect(getWordCount('')).toBe(0)
      expect(getWordCount('   ')).toBe(0)
    })
  })

  describe('getCharacterCount', () => {
    it('should return character count excluding spaces', () => {
      expect(getCharacterCount('hello world')).toBe(10)
      expect(getCharacterCount('hello   world')).toBe(10)
      expect(getCharacterCount('')).toBe(0)
    })
  })

  describe('getReadingTime', () => {
    it('should calculate reading time correctly', () => {
      // 200 words = 1 minute
      const text = 'word '.repeat(200)
      expect(getReadingTime(text)).toBe(1)
      
      // 400 words = 2 minutes
      const longText = 'word '.repeat(400)
      expect(getReadingTime(longText)).toBe(2)
    })
  })
})
