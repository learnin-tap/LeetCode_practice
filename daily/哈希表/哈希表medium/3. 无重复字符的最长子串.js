/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let max = 0, flag = 0 //flag为子串第一次出现的位置
    for(let i=0; i<s.length; i++) {
        if(map.has(s[i])) {
            flag = Math.max(flag, map.get(s[i])+1)
        }
        max = Math.max(max, i-flag+1) // max最小至少要为1，因为字符串长度为至少是1
        map.set(s[i], i)
    }
    return max
};