/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.stru = new Map()
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    if(this.stru.has(val)) {
        this.stru.set(val, this.stru.get(val)+1)
        return false
    }
    this.stru.set(val, 1)
        return true
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if(this.stru.has(val) && this.stru.get(val)==1)
        this.stru.delete(val)
    else if(this.stru.has(val) && this.stru.get(val)>1)
        this.stru.set(val, this.stru.get(val)-1)
    else
        return false
    return true
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    let random = []
    for([key, value] of this.stru) {
        for(let j=0; j<value; j++) {
            random.push(key)
        }
    }
    return random[Math.floor(Math.random()*random.length)]
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */