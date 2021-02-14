/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    nums = nums.join('').split('0')
    let sum = 0
    for(let i=0; i<nums.length; i++)
        sum = Math.max(sum, nums[i].length)
    return sum
};