/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array.from({length:m}, () => Array.from({length:n}, () => 0))
    for(let i=0; i<m; i++)    //第一列的走法只有一种
        dp[i][0] = 1
    for(let j=0; j<n; j++)    //第一行的走法只有一种
        dp[0][j] = 1
    for(let i=1; i<m; i++) {    //累加不同走法
        for(let j=1; j<n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};