/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0, high = nums.length-1
    while(low<high) {
        let mid = (low + high) >>> 1
        if(nums[mid]>nums[high])    //说明mid处于左边的单增区间，目标在mid右侧
            low = mid + 1
        else
            high = mid
    }
    return nums[low]
};