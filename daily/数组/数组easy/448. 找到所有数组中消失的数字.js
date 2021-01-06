/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i=0; i<nums.length; i++)
        // 元素的正值作为下标，取相反数后仍为负数表示之前未出现过
        nums[Math.abs(nums[i])-1] = -Math.abs(nums[Math.abs(nums[i])-1])
    const res = []
    for(let i=0; i<nums.length; i++)
        if(nums[i]>0)
            res.push(i+1)
    return res
};