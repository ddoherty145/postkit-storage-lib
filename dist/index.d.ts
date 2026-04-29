import type { Post } from './types';
export declare function savePosts(key: string, posts: Post[]): void;
export declare function loadPosts(key: string): Post[];
export declare function exportPosts(posts: Post[]): string;
export declare function importPosts(json: string): Post[];
