/**
 * @param {number[]} prices
 * @return {number}
 */
// 一共五种状态
// 动态规划，dp[i][j][k] 第i天，交易j笔，k=0表示手上不持有
var maxProfit = function(prices) {
    // 获取初始状态
    let dpi10 = 0
    let dpi11 = -prices[0]
    let dpi20 = 0
    let dpi21 = -prices[0]
    // 计算第i天
    for(let i=0; i<prices.length; i++) {
        dpi10 = Math.max(dpi10, dpi11+prices[i])
        dpi11 = Math.max(dpi11, -prices[i])
        dpi20 = Math.max(dpi20, dpi21+prices[i])
        dpi21 = Math.max(dpi21, dpi10-prices[i])
    }
    return dpi20
};