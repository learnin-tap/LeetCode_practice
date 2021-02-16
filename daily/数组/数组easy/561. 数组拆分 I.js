/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // sort排序需要时间O(nlogn),需要的栈空间O(logn),n为nums.length
    nums.sort((a,b) => a-b)
    let res = 0
    for(let i=0; i<nums.length; i+=2)
        res += nums[i]
    return res
};