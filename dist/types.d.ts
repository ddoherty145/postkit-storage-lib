export type PostStatus = 'draft' | 'review' | 'published';
export type Post = {
    id: string;
    title: string;
    body: string;
    author: string;
    tags: string[];
    category: string;
    status: PostStatus;
    createdAt: string;
    updatedAt: string;
};
export declare function savePosts(key: string, posts: Post[]): void;
export declare function loadPosts(key: string): Post[];
export declare function exportPosts(posts: Post[]): string;
export declare function importPosts(json: string): Post[];
