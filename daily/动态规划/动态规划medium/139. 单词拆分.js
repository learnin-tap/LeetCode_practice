/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict), len = s.length
    const  dp = new Array(len+1).fill(false)
    dp[0] = true    //空串为真，为了满足状态方程转移而设置
    for(let i=1; i<=len; i++) {
        for(let j=i-1; j>=0; j--) { //j去划分成两部分
            const suffix = s.slice(j, i)    //后缀 s[j:i-1]
            if(wordSet.has(suffix) && dp[j]) {  //后缀部分是单词，且左侧子串[0,j-1]的dp[j]为真
                dp[i] = true
                break   //dp[i] = true , i 长度的子串可以拆分成单词，不需要j继续划分子串
            }
        }
    }
    return dp[len]
};