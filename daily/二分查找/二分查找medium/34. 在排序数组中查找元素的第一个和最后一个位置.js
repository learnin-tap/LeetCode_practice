/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 一行代码的优雅写法
    return [nums.indexOf(target), nums.lastIndexOf(target)]
};