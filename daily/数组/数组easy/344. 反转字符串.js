/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // return s.reverse()   //本身的高阶函数
    
    for(let i=0; i<s.length/2; i++) {
        [s[i],s[s.length-1-i]] = [s[s.length-1-i],s[i]]
    }
    return s
};