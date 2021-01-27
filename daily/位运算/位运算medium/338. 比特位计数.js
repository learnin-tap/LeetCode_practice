/**
 * @param {number} num
 * @return {number[]}
 */
// 奇偶 + 位运算
// 0->0, 1->1, 2->10, 3->11, 4->100, 5->101, 6->110, 7->111, 8->1000
// dp 为二进制数 n 中 1 的个数
// n为奇数，dp[n] = dp[n-1] + 1
// n为偶数，dp[n] = dp[n/2]
var countBits = function(num) {
    const res = new Array(num+1).fill(0)
    let n = 0
    // for(let i=1; i<=num; i++) {
    //     res[i] = res[i & (i-1)] + 1
    //     res[i] = res[i >> 1] + (i & 1)
    // }
    while(n <= num) {
        if(n & 1 == 1)  //奇数
            res[n] = res[n-1] + 1
        else
            res[n] = res[n>>1]
        n++
    }
    return res
};