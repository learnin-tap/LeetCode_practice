/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    // 时间O(m*n),m n 分别对应矩阵的行和列，空间O(1)
    let res = [], temp = []
    for(let i=0; i<matrix[0].length; i++) {
        temp = []
        for(let j=0; j<matrix.length; j++) {
            temp.push(matrix[j][i])
        }
        res.push(temp)
    }
    return res
};