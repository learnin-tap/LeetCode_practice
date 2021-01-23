/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(!nums.length)
        return 0
    let sum = 1, max = 1
    for(let i=1; i<=nums.length; i++) {
        if(max<sum)
            max = sum
        if(nums[i]>nums[i-1])
            sum++
        else
            sum = 1
    }
    return max
};