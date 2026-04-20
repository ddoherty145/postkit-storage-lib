# postkit-storage-lib
 
Persists PostKit posts to browser localStorage and supports import/export of post data as JSON.
 
---
 
## Installation
 
```bash
npm install postkit-storage-lib
```
 
---
 
## Exports
 
### `savePosts(key, posts)`
Saves an array of posts to localStorage under the given key.
 
- `key` — `string` — the localStorage key to save under
- `posts` — `Post[]` — the posts to save
- returns `void`
### `loadPosts(key)`
Loads posts from localStorage. Returns `[]` if nothing has been saved yet.
 
- `key` — `string` — the localStorage key to read from
- returns `Post[]`
### `exportPosts(posts)`
Converts a posts array into a JSON string for download or backup.
 
- `posts` — `Post[]` — the posts to export
- returns `string`
### `importPosts(json)`
Parses a JSON string back into a Post array. Returns `[]` if the input is invalid.
 
- `json` — `string` — a JSON string from `exportPosts`
- returns `Post[]`
---
 
## Types
 
```ts
import type { Post, PostStatus } from 'postkit-storage-lib'
```
 
---
 
## Example Usage
 
```ts
import { savePosts, loadPosts, exportPosts, importPosts } from 'postkit-storage-lib'
 
const STORAGE_KEY = 'postkit-posts'
 
// Save and load
savePosts(STORAGE_KEY, myPosts)
const posts = loadPosts(STORAGE_KEY)
 
// Export to file
const json = exportPosts(posts)
 
// Import from file
const imported = importPosts(json)
if (imported.length === 0) {
  showError('Could not import that file.')
}
```
 
---
 
## Edge Cases
 
- `loadPosts` returns `[]` if the key does not exist
- `importPosts` returns `[]` if the JSON is malformed or not an array
- `savePosts` with an empty array clears that key's data
---
 
## Design Notes

- savePosts takes a key parameter so the app controls how data is namespaced in localStorage — this prevents collisions if multiple PostKit instances exist and makes the library easier to test.
- exportPosts returns a string instead of triggering a download because downloading is a UI concern — the app decides how to deliver it.
- importPosts returns [] on bad input instead of throwing so the app has something predictable to check and respond to, rather than needing a try/catch at every call site.
- loadPosts returns [] instead of null so the result is immediately usable — no null checks needed before calling .map() or .filter().