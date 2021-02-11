/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 时间O(n),n为所有字符串长度之和
    if(strs.length==0)  return ''
    let ans = strs[0]
    for(let i=1; i<strs.length; i++) {
        let j = 0
        for(; j<ans.length && j<strs[i].length; j++) {
            if(ans[j] != strs[i][j])
                break
        }
        ans = ans.substr(0, j)
        if(ans=='')
            return ans
    }
    return ans
};