/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//分析： 所有情况共三种，分别为0 1 2，我们要做的是给它们从小到大排序
//解题: 1. 在遍历的时候将为0(最小)的元素先删除然后加入到数组开头
//      2. 在遍历的时候将为2(最大)的元素先删除然后加入到数组末尾，此时需要注意遍历的下标和数组长度变化需要作相应调整
//      3. 0都在最前面,2都在最后面，剩下的1就在中间不用管了，也就排序好了
//优化： 遍历的判断第一遍用的if，感觉过于累赘改用三目运算符(利用其短路效果)，看起来舒服多了。

var sortColors = function(nums) {
    for(let i=0,len=nums.length; i<len; i++) {
        nums[i]===0 && (nums.splice(i,1), nums.unshift(0))
        nums[i]===2 && (nums.push(2), nums.splice(i,1),len--,i--)
    }
    return nums
};