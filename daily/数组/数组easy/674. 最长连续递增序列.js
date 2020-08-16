/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(!nums.length)
        return 0
    let sum = 0, max = 1 ,flag = nums[0]
    for(let i = 0; i < nums.length; i++) {
        if(flag < nums[i]) {
            sum++
            if(sum >= max)
                max = sum
        }
        else {
            sum = 1
        }
        flag = nums[i]
    }
    return max
};