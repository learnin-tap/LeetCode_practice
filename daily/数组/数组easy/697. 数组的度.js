/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 先找出频数最大值，可能有多个
// 2.将最大频数的多个key值存入数组中
// 3.选出最短子数组
var findShortestSubArray = function(nums) {
    let map = new Map(), distance=nums.length, min=50000, res=[],maxLength = 0
    for(let n of nums) {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1)
        maxLength = Math.max(maxLength,map.get(n))
    }
    for(let [key,value] of map.entries() )
        if(value==maxLength)
            res.push(key)   
    for(let i=0;i<res.length;i++){
        let satrt = nums.indexOf(res[i]), end = nums.lastIndexOf(res[i])
        min = min < end - satrt + 1 ? min : end - satrt + 1
    }
    return min
};