/**
 * @param {number[]} nums
 * @return {number}
 */
// 1.用sum累加最大值，用max记录最大值
// 2.最后return max
var maxSubArray = function(nums) {
    // let max = nums[0], sum = 0
    // for(let i = 0; i < nums.length; i++) {
    //     sum = nums[i]
    //     max = max < sum ? sum : max
    //     for(let j = i + 1; j < nums.length; j++) {
    //         sum += nums[j]
    //         max = max < sum ? sum : max
    //     }
    // }
    // return max

    let max = nums[0], sum = 0
    for(let i = 0; i < nums.length; i++) {
        if(sum + nums[i] > nums[i])
            sum += nums[i]
        else
            sum = nums[i]
        max = sum > max ? sum :max
    }
    return max
};