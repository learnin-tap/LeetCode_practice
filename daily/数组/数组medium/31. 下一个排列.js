/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// “下一个排列”的定义是：
// 给定数字序列的字典序中下一个更大的排列。如果不存在下一个更大的排列，
// 则将数字重新排列成最小的排列（即升序排列）。

// 以 152432举例，找到它的下一个排列 153224
// 1. 首先找到第一个小于右邻居的数——2
// 2. 再反向查找第一个大于它的数——3，
// 3. 交换2和3的位置 即现在是 153422
// 4. 可以发现交换之后的数位置的后面部分是降序的，让它变成升序的即可得下一个排列 153224
// 5. 有点脑筋急转弯找规律的感觉 
var nextPermutation = function(nums) {
    let i = nums.length-2
    while(i>=0 && nums[i]>=nums[i+1])   //寻找第一个小于右邻居的数
        i--
    if(i>=0) {
        let j = nums.length-1   //反向查找
        while(nums[j]<=nums[i])  //找到第一个大于nums[i]的数
            j--
        [nums[i],nums[j]] = [nums[j],nums[i]]   //交换两数
    }
    // 如果i==-1,其实也说明是递减序列，同样是前后交换，不用单独判断
    let l = i+1, r = nums.length-1  //交换左右
    while(l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++
        r--
    }
    return nums
};