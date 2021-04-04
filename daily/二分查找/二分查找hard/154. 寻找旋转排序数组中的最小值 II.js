/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // ƽ��ʱ��O(logn),�ռ�O(1)
    let left = 0, right = nums.length-1
    while(left<right) {
        let mid = (right+left) >> 1
        if(nums[mid]>nums[right])
            left = mid + 1
        else if(nums[mid]<nums[right])
            right = mid
        // ע����ȵ����
        else if(nums[mid]==nums[right])
            right--
    }
    return nums[left]
};