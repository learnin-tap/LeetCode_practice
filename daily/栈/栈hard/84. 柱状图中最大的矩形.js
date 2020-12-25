/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0, stack = []
    heights = [0,...heights,0]  //为了让栈有可比较元素
    for(let i=0; i<heights.length; i++) {
        while(heights[i]<heights[stack[stack.length-1]]) { //当前高度小于栈顶元素高度
            let top = stack.pop() //栈顶出栈
            maxArea = Math.max(maxArea, heights[top]*(i-stack[stack.length-1]-1))
        }
        stack.push(i)   //当前高度大于等于栈顶元素高度，将索引压栈
    }
    return maxArea
};