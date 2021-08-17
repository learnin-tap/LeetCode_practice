/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length == 0) return []
    const res = []
    let top = 0, 
        bottom = matrix.length-1, 
        left = 0, 
        right = matrix[0].length-1
    const size = matrix.length * matrix[0].length
    while(res.length!=size) {   // 仍未结束
        for(let i=left; i<=right; i++)
            res.push(matrix[top][i])
        top++
        for(let i=top; i<=bottom; i++)
            res.push(matrix[i][right])
        right--
        // 需要注意，如果全部遍历完，会出现right==left或right==left+1两种情况
        // 如果right==left+1,由于走完right--,时left==right
        // 会出现回马枪，下面for循环还能走一个,所以加上这里卡口，结束遍历
        if(res.length===size)  break
        for(let i=right; i>=left; i--)
            res.push(matrix[bottom][i])
        bottom--
        for(let i=bottom; i>=top; i--)
            res.push(matrix[i][left])
        left++
    }
    return res
};