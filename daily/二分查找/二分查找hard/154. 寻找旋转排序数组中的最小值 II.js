/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // 平均时间O(logn),空间O(1)
    let left = 0, right = nums.length-1
    while(left<right) {
        let mid = (right+left) >> 1
        if(nums[mid]>nums[right])
            left = mid + 1
        else if(nums[mid]<nums[right])
            right = mid
        // 注意相等的情况
        else if(nums[mid]==nums[right])
            right--
    }
    return nums[left]
};