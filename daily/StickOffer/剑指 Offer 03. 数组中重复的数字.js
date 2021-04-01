/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    // 时间O(n),空间O(n)
    // let set = new Set()
    // for(let item of nums) {
    //     if(set.has(item))
    //         return item
    //     set.add(item)
    // }

    // 利用索引和值的一对多关系，时间 O(n),空间 O(1)
    // 是几就让它回到几的位置
    for(let i=0; i<nums.length; i++) {
        if(nums[i]==i)
            continue
        if(nums[i]==nums[nums[i]])
            return nums[i]
        let temp = nums[i]
        nums[i] = nums[nums[i]]
        nums[temp] = temp
    }
};