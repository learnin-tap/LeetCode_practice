/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 不使用额外空间，利用异或，相同为0，最后剩的就是只出现一次的
    let a = 0
    for(let i=0; i<nums.length; i++) {
        a = a ^ nums[i]
    }
    return a
};