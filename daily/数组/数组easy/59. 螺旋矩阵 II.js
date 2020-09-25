/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = []
    for (let i = 0; i < n; i++) 
        matrix[i] = []
    let top = 0, bottom = n - 1, left = 0, right = n - 1
    let count = 0
    while (count < n * n) {
        for (let i = left; i <= right; i++)
            matrix[top][i] = ++count
        top++
        for (let i = top; i <= bottom; i++)
            matrix[i][right] = ++count
        right--
        for (let i = right; i >= left; i--)
            matrix[bottom][i] = ++count
        bottom--
        for (let i = bottom; i >= top; i--)
            matrix[i][left] = ++count
        left++
    }
    return matrix
};