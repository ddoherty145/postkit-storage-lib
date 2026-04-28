"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.savePosts = savePosts;
exports.loadPosts = loadPosts;
exports.exportPosts = exportPosts;
exports.importPosts = importPosts;
function savePosts(key, posts) {
    localStorage.setItem(key, JSON.stringify(posts));
}
function loadPosts(key) {
    const data = localStorage.getItem(key);
    if (!data)
        return [];
    return JSON.parse(data);
}
function exportPosts(posts) {
    return JSON.stringify(posts, null, 2);
}
function importPosts(json) {
    const parsed = JSON.parse(json);
    if (!Array.isArray(parsed))
        throw new Error('Invalid format');
    return parsed;
}
