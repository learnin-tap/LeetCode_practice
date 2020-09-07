/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 1.用哈希表存放数据，arr数组存放去重之后的value值
// 2.排序得出结果，但是时间复杂度上不符合题目要求，择日改进写法
var topKFrequent = function(nums, k) {
    let map = new Map(), arr=[...new Set(nums)]
    nums.forEach(item=>{
        if(map.has(item))
            map.set(item,map.get(item)+1)
        else
            map.set(item,1)
    })
    return arr.sort((a,b)=>map.get(b)-map.get(a)).slice(0,k)
};