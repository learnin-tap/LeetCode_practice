/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// 此题由于加入了手续费，无法使用贪心写法，可用动态规划
// 每天只有买或者不买两种情况，且最多只能持有一种股票
// 开一个二维数组,dp[i][0]表示第i天手里没有股票的最大收益,dp[i][1]表示手里持有股票的最大收益
var maxProfit = function(prices, fee) {
    const n = prices.length
    const dp = new Array(n).fill(0).map(()=>new Array(2).fill(0))
    dp[0][0] = 0, dp[0][1] = -prices[0] //第一天交易结束后可能的两种状态
    for(let i=1; i<n; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]-fee)
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i])
    }
    console.log(dp)
    return dp[n-1][0]   //不持有股票收益肯定高于持有，所以是dp[n-1][0]，而不是dp[n-1][1]
};