/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // let n = nums.length
    // let left = new Array(n).fill(0) //从左到右叠加
    // let right = new Array(n).fill(0)//从右到左叠加
    // for(let i=0; i<n; i++) {
    //     left[i] += nums[i]
    //     right[i] += nums[n-i-1]
    //     if(i>0) {
    //         left[i] += left[i-1]
    //         right[i] += right[i-1]
    //     }
    // }

    // for(let i=0; i<n; i++) {
    //     if(i==0 && right[n-i-2]==0) // 0 左侧作为边界
    //         return 0
    //     if(i==n-1 && left[i-1]==0)  // n-1 右侧作为边界
    //         return i
    //     if(left[i-1] == right[n-i-2])
    //         return i
    // }                                                                    
    // return -1


    // 前缀和 sum == total - sum - num[i]
    let total = nums.reduce((sum, cur) => sum + cur, 0)
    let sum = 0
    for(let i=0; i<nums.length; i++) {
        if(sum == total-sum-nums[i])
            return i
        sum += nums[i]
    }
    return -1
};