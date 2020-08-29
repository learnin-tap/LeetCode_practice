/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 选择排序
    // for(let i=0; i<k; i++) {
    //     for(let j=i+1; j<nums.length; j++) {
    //         if(nums[j]>nums[i]){
    //             [nums[i], nums[j]] = [nums[j], nums[i]]
    //         }
    //     }
    // }
    // return nums[k-1]

    // 冒泡排序
    // for(let i=0; i<k; i++) {
    //     for(let j=0; j<nums.length-i-1; j++) {
    //         if(nums[j+1]<nums[j]) {
    //             [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
    //         }
    //     }
    // }
    // return nums[nums.length-k]

    return nums.sort((a,b)=>b-a)[k-1]
};