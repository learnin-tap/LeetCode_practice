/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.max = capacity
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const cache = this.cache
    if(cache.has(key)) {
        const value = cache.get(key)
        // 最近使用的在最后面
        cache.delete(key)
        cache.set(key, value)
        return value
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const cache = this.cache
    // 最近使用的在最后面
    if(cache.has(key))
        cache.delete(key)
    // 存满了先删最少使用的
    if(cache.size==this.max)
        cache.delete(cache.keys().next().value)
    cache.set(key, value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */