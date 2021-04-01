/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 法一: 双指针，时间O(n*n),空间O(1)，每次遍历都扫描一遍
    // let sum = 0, right = height.length-1
    // // 第一个和最后一个不能存水
    // for(let i=1; i<right; i++) {
    //     // 找左边最大的
    //     let max_left = 0
    //     for(let j=i-1; j>=0; j--) {
    //         if(max_left<height[j])
    //             max_left = height[j]
    //     }
    //     // 找右边最大的
    //     let max_right = 0
    //     for(let j=i+1; j<height.length; j++) {
    //         if(max_right<height[j])
    //             max_right = height[j]
    //     }
    //     let dis = Math.min(max_left, max_right) - height[i]
    //     // 累加水量
    //     if(dis>0)
    //         sum += dis
    // }
    // return sum

    // 法二: 动态规划，时间O(n)，空间O(n)
    let len = height.length
        maxLeft = new Array(len).fill(0),
        maxRight = new Array(len).fill(0),
        
    // 记录每个柱子左边柱子最大高度
    maxLeft[0] = height[0]
    for(let i=1; i<len; i++)
        maxLeft[i] = Math.max(height[i], maxLeft[i-1])
    // 记录每个柱子右边柱子的最大高度
    maxRight[len-1] = height[len-1]
    for(let i=len-2; i>=0; i--)
        maxRight[i] = Math.max(height[i], maxRight[i+1])
    // 求和
    let sum = 0
    for(let i=0; i<len; i++) {
        let count = Math.min(maxLeft[i], maxRight[i]) - height[i]
        if(count > 0)
            sum += count
    }
    return sum
};