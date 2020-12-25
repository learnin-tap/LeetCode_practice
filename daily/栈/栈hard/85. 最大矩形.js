/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(!matrix.length)
        return 0
    const row = matrix.length, col = matrix[0].length
    // 双重循环将能叠加的每纵叠加起来
    for(let i=0; i<row; i++) {
        for(let j=0; j<col; j++) {
            matrix[i][j] = Number(matrix[i][j])
            if(i>0 && matrix[i][j]!=0)
                matrix[i][j] = matrix[i-1][j] + matrix[i][j]
        }
    }
    // 下面找每层的最大面积，res即所有层的全局最大面积
    let res = 0
    for(let i=0; i<matrix.length; i++) {
        let maze = [0, ...matrix[i], 0]
        let stack = [], maxArea = 0
        for(let i=0; i<maze.length; i++) {
            while(maze[i]<maze[stack[stack.length-1]]) {   //当前元素小于栈顶元素高度
                const top = stack.pop() //栈顶弹栈
                maxArea = Math.max(maxArea, maze[top]*(i-stack[stack.length-1]-1))      
            }
            stack.push(i)   //当前元素大于等于栈顶元素，将索引压栈
        }
        if(res<maxArea)
            res = maxArea
    }
    return res
};