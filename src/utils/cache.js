// utils/cache.js
export class Cache {
    constructor(ttl = 300000) { // 5 minutes default TTL
      this.cache = new Map();
      this.ttl = ttl;
    }
  
    set(key, value) {
      this.cache.set(key, {
        value,
        timestamp: Date.now()
      });
    }
  
    get(key) {
      const item = this.cache.get(key);
      if (!item) return null;
      
      if (Date.now() - item.timestamp > this.ttl) {
        this.cache.delete(key);
        return null;
      }
      
      return item.value;
    }
  }
  