/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    // 贪心：尽可能拆成3的倍数 时间O(1),空间O(1)
    // if(n==2)  return 1
    // if(n==3)  return 2
    // const a = Math.floor(n/3)
    // const b = n % 3
    // if(b==0)  return Math.pow(3, a)
    // if(b==1)  return Math.pow(3, a-1) * 4    // 把剩余的1和3合成4是最大的
    // if(b==2)  return Math.pow(3, a) * 2

    // 动态规划 时间O(n^2),空间O(n)
    // 每次剪掉一段都有两种选择，一种是再剪一段，另一种是不剪，两种取最大的
    let dp = new Array(n+1).fill(0)
    dp[2] = 1
    for(let i=3; i<n+1; i++) {
        for(let j=2; j<i; j++) {
            // j*(i-j)为切一刀, j*dp(i-j)为每切一刀进入新的一轮比大小
            let cur = Math.max(j*(i-j), j*dp[i-j])
            dp[i] = Math.max(dp[i], cur)
        }
    }
    return dp[n]
};