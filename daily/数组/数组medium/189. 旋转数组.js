/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // 利用unshift和pop方法暴力解
    // for(let i=0; i<k; i++)
    //     nums.unshift(nums.pop())
    // return nums

    // 利用 splice暴力方法 一行代码求解
    // return nums.splice(0, 0, ...nums.splice(nums.length-k))

    // O(n)时间复杂度，O(1)空间复杂度的正经写法
    const reverse = (nums, l, r) => {
        while(l<r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
            r--
        }
    }
    const n = nums.length
    k %= n  //取余，减少循环的不必要操作
    // [1,2,3,4,5,6,7]
    reverse(nums, 0, n-1) //先全部反转 [7,6,5,4,3,2,1]
    reverse(nums, 0, k-1) //再把前半部分正序   [4,5,6,7,3,2,1]
    reverse(nums, k, n-1) //最后把后半部分正序 [4,5,6,7,1,2,3]
    return nums
};