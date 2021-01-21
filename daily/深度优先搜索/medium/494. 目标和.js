/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    // 每个元素都有两种状态，共有2^n种状态
    let ant = 0
    const dfs = (nums, i, sum, S) => {
        if(i == nums.length) {
            if(sum == S)
                ant++
        }
        else {
            dfs(nums, i+1, sum+nums[i], S)  //正数的情况，包括0
            dfs(nums, i+1, sum-nums[i], S)  //负数的情况，包括0
        }
    }
    dfs(nums, 0, 0, S)
    return ant
};