/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    // 和斐波拉契同一个思路
    let a = 1, b = 1, temp = 0
    for(let i=2; i<=n; i++) {
        temp = b
        b = (a + b) % 1000000007
        a = temp
    }
    return b
};