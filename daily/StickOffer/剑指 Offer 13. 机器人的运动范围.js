/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    const canMove = (i, j, k) => {
        if(parseInt(i/10) + i%10 + parseInt(j/10) + j%10 <= k)
            return true
        return false
    }
    let sum = 0, step = {}
    const dfs = (i, j) => {
        if(i<0 || j<0 || i>=m || j>=n)
            return
        // 加杠号区分开，作为唯一标识
        if(!step[`${i}-${j}`] && canMove(i, j, k)) {
            step[`${i}-${j}`] = true
            sum++
            dfs(i-1, j)
            dfs(i+1, j)
            dfs(i, j-1)
            dfs(i, j+1)
        }
    }
    dfs(0, 0)
    return sum
};