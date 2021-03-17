/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// https://leetcode-cn.com/problems/distinct-subsequences/solution/js-dong-tai-gui-hua-jian-dan-yi-dong-by-jsyt/
// 1. 定义 dp table
//    dp[i][j] 表示 s[0-i] 的子序列与 t[0-i] 相等的个数
// 2. 定义 dp 方程
//    if(s[i]!=t[i])
//       此时 dp[i][j] 等价于 dp[i-1][j]
//    if(s[i]==t[i]) 此时要分两种情况，选不选s[i]作为s[0-i] 子序列的最后一个字符
//       选 dp[i][j] = dp[i-1][j-1]
//       不选 dp[i][j] = dp[i-1][j]
//       综合 dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
//  3. dp table 初始化
//      - 在s t 字符串的前面加上一个空字符串，将dp初始化成s.length+1 * t.length+1的二维数组
//        并将所有的值全部初始化为0
//      - 当j=0时，t为空字符串，此时dp[i][0]=1
//  4. 结果
//      return dp[s.length][t.length]
var numDistinct = function (s, t) {
	// const m =s.length, n = t.length
	// if(m < n)
	//     return 0
	// const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
	// for(let i=0; i<=m; i++) {
	//     dp[i][n] = 1
	// }
	// for(let i=m-1; i>=0; i--) {
	//     for(let j=n-1; j>=0; j--) {
	//         //如果匹配到了
	//         if(s[i]==t[j])
	//             dp[i][j] = dp[i+1][j+1] + dp[i+1][j]
	//         else
	//             dp[i][j] = dp[i+1][j]
	//     }
	// }
	// return dp[0][0]

	// 时间O(m*n), 空间O(m*n)
	const dp = new Array(s.length + 1).fill(0).map(() => new Array(t.length + 1).fill(0))
	for (let i = 0; i <= s.length; i++)
		dp[i][0] = 1
	for (let i = 1; i <= s.length; i++) {
		for (let j = 1; j <= t.length; j++) {
			if (s[i - 1] == t[j - 1])
				dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
			else
				dp[i][j] = dp[i - 1][j]
		}
	}
	return dp[s.length][t.length]
};