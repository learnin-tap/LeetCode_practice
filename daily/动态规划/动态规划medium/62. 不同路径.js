/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 动态规划
    // 时间复杂度 O(n^2)
    // 空间复杂度 O(n^2)
    let dp = Array.from({length:m}, () => Array.from({length:n}, () => 0))
    // 第一列的走法只有一种
    for (let i = 0; i < m; i++){
        dp[i][0] = 1;
    }
    // 第一行的走法只有一种
    for (let j = 0; j < n; j++){
        dp[0][j] = 1;
    }
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){
            // 当前位置是从左边或上边走过来的
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};