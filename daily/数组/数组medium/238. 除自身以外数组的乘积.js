/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = 1, right = 1, n = nums.length, res = new Array(n).fill(1)
    for(let i=0; i<nums.length; i++) {
        res[i] *= left  //左边乘积
        left *= nums[i]
        res[n-1-i] *= right //右边乘积
        right *= nums[n-1-i]
    }
    // 得出的结果就是不包括自身的左右乘积
    return res
};