/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums), max = 0
    for(let i=0; i<nums.length; i++) {
        // 如果不存在，说明当前项属于起点
        if(!set.has(nums[i]-1)) {
            let count = 1, cur = nums[i]
            while(set.has(cur+1)) {
                cur++
                count++
            }
            max = Math.max(max, count)
        }
    }
    return max
};
