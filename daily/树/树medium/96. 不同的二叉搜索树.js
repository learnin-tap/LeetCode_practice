/**
 * @param {number} n
 * @return {number}
 */
// 1. n个节点的二叉排序树，分别从1到n为节点
// 2. 1为根节点时，其左子树节点数为0，右子树节点数为n-1
// 3. 同理2为根节点时，左子树节点数为1，右子树节点数为n-2
// 4. 可得sum(n) = sum(0)*sum(n-1)+sum(1)*sum(n-2)+...+sum(n-1)sum(0)
var numTrees = function(n) {
    const dp = new Array(n+1).fill(0)
    dp[0] = 1, dp[1] = 1
    for(let i=2; i<=n; i++) {
        for(let j=0; j<i; j++) {
            dp[i] += dp[j] * dp[i-j-1]
        }
    }
    return dp[n]
};