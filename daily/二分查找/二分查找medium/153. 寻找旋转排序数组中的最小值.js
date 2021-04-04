/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // 时间O(logn), 空间O(1)
    let left = 0, right = nums.length-1
    while(left<right) {
        let mid = (left+right) >> 1
        if(nums[mid]>nums[right])
            left = mid+1
        // 不需要考虑重复元素的情况
        else 
            right = mid
    }
    return nums[left]
};