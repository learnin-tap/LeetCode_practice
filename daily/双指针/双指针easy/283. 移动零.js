/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // let len = nums.length
    // for(let i=0; i<len; i++) {
    //     if(nums[i]==0) {
    //         nums.splice(i,1) //去掉前面的零
    //         nums.push(0)    //并将 0 添加到数组末尾
    //         // 下标和长度都变了
    //         i--
    //         len--
    //     }
    // }
    // return nums

    // 双指针解法
    for(let i=0,j=0; i<nums.length; i++) {
        if(nums[i]!=0) {    // i 为快指针
            [nums[j],nums[i]] = [nums[i],nums[j]]
            j++     // j 为慢指针
        }
    }
    return nums
};