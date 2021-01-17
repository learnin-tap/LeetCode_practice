/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // 暴力超时的写法
    // let res = 0
    // for(let i=0; i<nums.length; i++) {
    //     let sum = 0
    //     for(let j=i; j<nums.length; j++) {
    //         sum += nums[j]
    //         if(sum==k)
    //             res++
    //     }
    // }
    // return res

    let sum = 0, res = 0, map = new Map()
    map.set(0, 1)   //num[i]=sum[i]-sum[i-1],当i=0时，让sum[-1]为0保证边界情况成立
    for(let i=0; i<nums.length; i++) {
        // 每个元素对应一个前缀和
        sum += nums[i]
        // 当前前缀和已知，判断是否含有sum-k的前缀和，就可以知道某一区间和为k了，即 sum = (sum-k) + k
        if(map.has(sum-k))
            res += map.get(sum-k)   //累加符合的出现次数
        if(map.has(sum))
            map.set(sum, map.get(sum)+1)
        else
            map.set(sum, 1)
    }
    return res
};