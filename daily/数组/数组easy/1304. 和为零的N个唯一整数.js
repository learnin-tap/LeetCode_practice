/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let sum = 0, res = []
    for(let i=0;i<n-1;i++){
        sum += i
        res.push(i)
    }
    res.push(-sum)
    return res
};