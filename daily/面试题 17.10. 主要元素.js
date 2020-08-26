/**
 * @param {number[]} nums
 * @return {number}
 */
// 1.用循环+哈希可求解
var majorityElement = function(nums) {
    let average = nums.length/2, map = new Map()
    for(item of nums){
        map.set(item,map.has(item)?map.get(item)+1:1)
        if(map.get(item)>average){
            return item
        }
    }
    return -1
};