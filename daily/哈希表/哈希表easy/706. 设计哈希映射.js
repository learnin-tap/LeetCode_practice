/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    // this.key_maze = []
    // this.value_maze= []

    this.hashmap = {}
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    // for(let i=0; i<this.key_maze.length; i++) {
    //     if(key == this.key_maze[i]) {
    //         this.value_maze[i] = value
    //         return
    //     }
    // }
    // this.key_maze.push(key)
    // this.value_maze.push(value)


    this.hashmap[key]  = value
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    // for(let i=0; i<this.key_maze.length; i++) {
    //     if(key == this.key_maze[i]){
    //         return this.value_maze[i]
    //     }
    // }
    // return -1


    return (this.hashmap[key] || this.hashmap[key]==0) ? this.hashmap[key] : -1
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    // for(let i=0; i<this.key_maze.length; i++) {
    //     if(key == this.key_maze[i]) {
    //         this.key_maze.splice(i,1)
    //         this.value_maze.splice(i,1)
    //     }
    // }


    delete this.hashmap[key]
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */