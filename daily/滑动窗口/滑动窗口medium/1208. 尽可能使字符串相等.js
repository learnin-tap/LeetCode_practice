/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let res = [], count = 0, resCount = 0
    for(let i=0; i<s.length; i++) {
        const newCost = Math.abs(s[i].charCodeAt()-t[i].charCodeAt())
        res.push(newCost)
        resCount += newCost
        while(resCount>maxCost) {  //滑动窗口
            resCount -= res.shift()
        }
        count = Math.max(count, res.length)
    }
    return count
};