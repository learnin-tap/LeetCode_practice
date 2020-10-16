/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const res = []
    matrix.forEach(item => {
        res.push(...item)
    })
    res.sort((a,b)=>a-b)
    return res[k-1]
};