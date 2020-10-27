/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = x < 0 ? -1 : 1
    x = flag * Math.abs(x).toString().split('').reverse().join('')
    return x>2**31-1 || x<-(2**31) ? 0 : x
};