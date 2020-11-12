/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n =matrix.length
    for(let i=0; i<n; i++)
        for(let j=i; j<n; j++)
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    // 前面这个双层循环是沿矩阵副轴交换值
    matrix.map(item=>item.reverse())  // 交换之后再让每层逆序即可得正确结果  
    return matrix
};