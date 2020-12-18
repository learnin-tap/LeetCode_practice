/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    matrix.reverse()    //行置换一下
    //双层循环是沿矩阵副轴交换值
    for(let i=0; i<matrix.length; i++)
        for(let j=0; j<=i; j++)
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
    return matrix
};