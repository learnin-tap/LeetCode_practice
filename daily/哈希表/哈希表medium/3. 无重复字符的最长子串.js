/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let flag = 0, max = 0   // flag 为无重复子串起始位置
    for(let i=0; i<s.length; i++) {
        if(map.has(s[i]))
            flag = Math.max(flag, map.get(s[i])+1)
        max = Math.max(max, i-flag+1)
        map.set(s[i], i)
    }
    return max
};