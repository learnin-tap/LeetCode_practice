/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    return Array.from({length: Math.pow(10, n) - 1}, (item, index) => index+1)
};