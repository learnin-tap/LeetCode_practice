/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return n && n + sumNums(n-1)    //利用n判断是否为0，作为短路条件
};