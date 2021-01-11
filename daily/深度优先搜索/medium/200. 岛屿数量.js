/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (grid, row, col) => {
        if(row<0 || row>=grid.length)
            return
        if(col<0 || col>=grid[0].length)
            return
        if(grid[row][col]=='0' || grid[row][col]=='2')
            return
        grid[row][col] = '2'
        // 上下左右都搜一下
        dfs(grid, row-1, col)
        dfs(grid, row+1, col)
        dfs(grid, row, col-1)
        dfs(grid, row, col+1)
    }
    let sum = 0
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(grid[i][j]=='1') {
                dfs(grid, i, j)
                sum++
            }
        }
    }
    return sum
};