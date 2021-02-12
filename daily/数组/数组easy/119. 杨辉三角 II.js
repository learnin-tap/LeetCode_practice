/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let dp = new Array(rowIndex+1).fill(1)
    for(let i=1; i<rowIndex+1; i++)
        for(let j=i-1; j>=1; j--)
            dp[j] = dp[j] + dp[j-1] //一层一层往下迭代
    return dp
};