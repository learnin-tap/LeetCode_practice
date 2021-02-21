/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // return nums.indexOf(target)
    
    // 二分，时间复杂度优化到log(n)
    let low = 0, high = nums.length-1
    while(low <= high) {
        let mid = (low+high) >>> 1
        if(nums[mid] == target)
            return mid
        // 右半段是有序的
        if(nums[mid]<nums[high]) {
            if(nums[mid]<target && nums[high]>=target)
                low = mid + 1
            else
                high = mid - 1
        }
        // 左半段是有序的
        else {
            if(nums[mid]>target && nums[low]<=target)
                high = mid - 1
            else
                low = mid + 1
        }
    }
    return -1
};