import { importPosts, loadPosts } from '../src/types'

const createLocalStorageMock = () => {
  const store = new Map<string, string>()
  return {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => {
      store.set(key, value)
    },
    clear: () => {
      store.clear()
    },
  }
}

Object.defineProperty(globalThis, 'localStorage', {
  value: createLocalStorageMock(),
  writable: true,
})

describe('loadPosts', () => {
  it('returns empty array when nothing is saved', () => {
    const result = loadPosts('nonexistent-key')
    expect(result).toEqual([])
  })
})

describe('importPosts', () => {
  it('throws on malformed JSON', () => {
    expect(() => importPosts('not json')).toThrow()
  })
})