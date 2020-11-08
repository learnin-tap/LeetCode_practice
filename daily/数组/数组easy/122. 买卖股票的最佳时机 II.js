/**
 * @param {number[]} prices
 * @return {number}
 */
// 一切数据都是已知的，我们要做的其实就是下一个有涨就买，有跌就卖
var maxProfit = function(prices) {
    let sum = 0
    for(let i=1; i<prices.length; i++)
        if(prices[i]>prices[i-1])
            sum += (prices[i]-prices[i-1])
    return sum
};