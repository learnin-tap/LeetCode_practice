/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let flag = nums[0] , last = nums[nums.length-1]
    if(flag!=0)
        return 0
    while(flag<=last){
        if(flag!=nums[flag])
            return flag
        flag++
    }
    return flag
};