/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // // 复杂度不够理想，因为前后用了两次遍历
    // const map = new Map()
    // for(let i=0; i<nums.length; i++)
    //     map.set(nums[i],i)
    // for(let i=0; i<nums.length; i++) {
    //     let rest = target-nums[i]
    //     if(map.has(rest) && map.get(rest)!=i) //不能使用同一个元素
    //         return [i,map.get(rest)]
    // }

    // 一次遍历的写法
    const map = new Map()
    for(let i=0; i<nums.length; i++) {
        if(map.has(target-nums[i]))
            return [map.get(target-nums[i]),i]            
        map.set(nums[i],i)
    }
};