/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 双指针解法，两边不断收窄比较最大面积
    let left = 0, right = height.length-1, max = 0
    while(left < right) {
        if((right-left) * Math.min(height[left], height[right]) > max ) {
            max = (right-left) * Math.min(height[left], height[right])
        } else {
            height[left] < height[right] ? left++ : right--
        }
    }
    return max
};