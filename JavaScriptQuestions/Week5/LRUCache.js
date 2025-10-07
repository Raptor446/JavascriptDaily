// For large inputs, use LRU (Least Recently Used) caches to prevent memory bloat
class LRUCache {
  constructor(limit = 3) {
    this.cache = new Map()
    this.limit = limit
  }

  get(key) {
    if (!this.cache.has(key)) return null
    const val = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, val) // Move to end (most recently used)
    return val
  }

  set(key, val) {
    if (this.cache.has(key)) this.cache.delete(key)
    else if (this.cache.size >= this.limit) this.cache.delete(this.cache.keys().next().value)
    this.cache.set(key, val)
  }
}
