/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 出现小于时的两种情况和对应的处理方式
// 1. 354——>344
// 2. 352——>355
var checkPossibility = function(nums) {
    if(nums.length<=1)
        return true
    let sum = 0
    for(let i=1; i<nums.length && sum<2; i++) {
        if(nums[i-1]<=nums[i])
            continue
        sum++
        if(i-2>=0 && nums[i-2]>nums[i])
            nums[i] = nums[i-1]
        else
            nums[i-1] = nums[i]
    }
    return sum < 2

};