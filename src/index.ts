import type { Post } from './types'

export function savePosts(key: string, posts: Post[]): void {
  localStorage.setItem(key, JSON.stringify(posts))
}

export function loadPosts(key: string): Post[] {
  const data = localStorage.getItem(key)
  if (!data) return []
  return JSON.parse(data) as Post[]
}

export function exportPosts(posts: Post[]): string {
  return JSON.stringify(posts, null, 2)
}

export function importPosts(json: string): Post[] {
  try {
    const parsed = JSON.parse(json)
    if (!Array.isArray(parsed)) return []
    return parsed as Post[]
  } catch {
    return []
  }
}