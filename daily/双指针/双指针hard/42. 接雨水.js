/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let sum = 0
    // 第一列和最后一列不会积水
    for(let i=1; i<height.length-1; i++) {
        let max_left = 0    // 找到左边最高柱子
        for(let j=0; j<i; j++)
            if(height[j] > max_left)
                max_left = height[j]
        let max_right = 0   // 找到右边最高柱子
        for(let j=i+1; j<height.length; j++)
            if(height[j] > max_right)
                max_right = height[j]
        if(Math.min(max_left, max_right) > height[i])   // 短板效应
            sum += Math.min(max_left, max_right) - height[i]
    }
    return sum
};