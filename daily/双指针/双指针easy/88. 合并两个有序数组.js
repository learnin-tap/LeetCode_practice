/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let res = [], last = m + n - 1
    // 反向填充，避免破坏原有数组，时间O(m+n)，空间O(1)
    while(n) {
        // m==0这个情况不能遗漏
        if(m==0 || nums1[m-1] <= nums2[n-1])
            nums1[last--] = nums2[--n]
        else
            nums1[last--] = nums1[--m]
    }
    return nums1
};