/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let width = grid[0].length, high = grid.length
    if(width == 0 || high == 0)
        return 0
    for(let i=1; i<width; i++)  //累加计算好第一行的
        grid[0][i] += grid[0][i-1]   
    for(let i=1; i<high; i++)   //累加计算好第一列的
        grid[i][0] += grid[i-1][0]
    
    for(let i=1; i<high; i++) { //每遍历一个都累加最小值
        for(let j=1; j<width; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])
        }
    }
    return grid[high-1][width-1]
};