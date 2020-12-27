/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const n = prices.length
    // k值范围太大了，实际上k是不可能超过n的一半
    if(k > n/2) k = Math.floor(n/2)
    // 三维DP,第一层为天数，第二层为允许交易的最大次数，第三层为股票持有状态
    const res = Array.from({length:n+1},()=>Array.from({length:k+1},()=>new Array(2)))
    // 第一天股票持有状态需要初始化
    for(let i=0; i<k+1; i++) {
        res[0][i][0] = 0          //不持有时
        res[0][i][1] = -Infinity  //持有时
    }
    for(let i=1; i<n+1; i++) {
        // 第一次交易的股票状态需要初始化
        res[i][0][0] = 0
        res[i][0][1] = -Infinity
        for(let j=1; j<k+1; j++) {
            res[i][j][0] = Math.max(res[i-1][j][0], res[i-1][j][1]+prices[i-1])
            res[i][j][1] = Math.max(res[i-1][j][1], res[i-1][j-1][0]-prices[i-1])        
        }
    }
    console.log(res)
    return res[n][k][0]
};