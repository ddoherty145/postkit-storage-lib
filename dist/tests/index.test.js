"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../src/types");
const createLocalStorageMock = () => {
    const store = new Map();
    return {
        getItem: (key) => store.get(key) ?? null,
        setItem: (key, value) => {
            store.set(key, value);
        },
        clear: () => {
            store.clear();
        },
    };
};
Object.defineProperty(globalThis, 'localStorage', {
    value: createLocalStorageMock(),
    writable: true,
});
describe('loadPosts', () => {
    it('returns empty array when nothing is saved', () => {
        const result = (0, types_1.loadPosts)('nonexistent-key');
        expect(result).toEqual([]);
    });
});
describe('importPosts', () => {
    it('throws on malformed JSON', () => {
        expect(() => (0, types_1.importPosts)('not json')).toThrow();
    });
});
