/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // O(n^2) 时间，O(n)空间，n为nums长度
    nums.sort((a,b) => a-b)   //先进行排序
    const n = nums.length; res = []
    for(let i=0; i<n; i++) {
        // 相邻重复的跳过
        if(i>0 && nums[i]==nums[i-1])
            continue
        // 双指针
        let l = i+1, r = n-1
        while(l < r) {
            const temp = nums[i] + nums[l] + nums[r]
            if(temp>0)
                r--
            if(temp<0)
                l++
            if(temp==0) {
                res.push([nums[i], nums[l], nums[r]])
                while(l<r && nums[l]==nums[l+1])
                    l++
                while(l<r && nums[r]==nums[r-1])
                    r--
                l++
                r--
            }
        }
    }
    return res
};