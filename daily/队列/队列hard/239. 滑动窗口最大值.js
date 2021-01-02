/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const deque = [], res = []
    for(let i=0; i<nums.length; i++) {
        // 不在滑动窗口范围的从队头去掉
        if(i-deque[0]>=k)
            deque.shift()
        // 单调队列中元素小于等于新加入元素就弹出
        while(nums[deque[deque.length-1]]<=nums[i])
            deque.pop()
        deque.push(i)   // 添加下标进单调队列
        // 形成滑动窗口，如k=3, 0 1 2满足
        if(i>=k-1) {
            res.push(nums[deque[0]])
        }
    }
    return res
};