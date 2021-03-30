/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0], sum = 0
    for(let i=0; i<nums.length; i++) {
        if(sum>0)
            sum += nums[i]
        else
            sum = nums[i]
        max = Math.max(sum, max)
    }
    return max
};