/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    // // 暴力超时
    // let res = 0
    // for(let i=0; i<nums.length; i++) {
    //     let sum = 0
    //     for(let j=i; j<nums.length; j++) {
    //         sum += nums[j]
    //         if(sum>=lower && sum<=upper) {
    //             res ++
    //         }
    //     }
    // }
    // return res

    // 仍然是暴力，也没有优化多少，但能AC
    let res = 0, sums = []   //前缀数组
    for(let i=0; i<nums.length; i++)
        sums[i] = (sums[i-1] || 0) + nums[i]
    for(let i=0; i<nums.length; i++) {
        for(let j=i; j<nums.length; j++) {
            let sum
            if(i==j)
                sum = nums[j]
            else
                sum = sums[j] - sums[i] + nums[i]
            if(sum>=lower && sum<=upper)
                res++
        }
    }
    return res
};