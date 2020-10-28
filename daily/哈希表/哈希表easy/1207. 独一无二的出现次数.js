/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map(), set = new Set()
    arr.forEach(item => {
        if(map.has(item))
            map.set(item, map.get(item)+1)
        else
            map.set(item, 1)
    })
    for([key,value] of map)
        set.add(value)
    return map.size === set.size
};