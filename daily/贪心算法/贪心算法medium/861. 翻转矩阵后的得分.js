/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    const row = A[0].length, col = A.length
    const num1 = new Uint8Array(row)
    for(let i=0; i<col; i++) {
        // 倒序扫描才能保证每行都能置换
        for(let j=row-1; j>=0; j--) {
            if(A[i][0]==0)  A[i][j] = 1-A[i][j] //行首位为1才能保持最大
            if(A[i][j]==1)  num1[j]++   //记录每列中1的个数
        }
    }
    for(let i=0; i<row; i++)
        // 每列中1的个数小于0的个数，就置换
        if(num1[i]<col-num1[i])
            for(let j=0; j<col; j++)
                A[j][i] = 1-A[j][i]
    // 0b作前缀代表二进制,0为传入的初始值，所以sum初始值为0，而不是二维数组的第一个元素
    let res = A.reduce((sum,item)=> sum+Number('0b'+item.join('')), 0)
    return res
 };