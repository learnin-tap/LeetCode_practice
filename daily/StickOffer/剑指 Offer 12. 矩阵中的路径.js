/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // 时间O(3^word.length*row*col), 空间O(K),K为递归的深度，最坏情况K=M*N
    let row = board.length, col = board[0].length

    const dfs = (i, j, board, word, index) => {
        if(i<0 || i>=row || j<0 || j>col || board[i][j]!==word[index])
            return false
        if(index==word.length-1)//word遍历完了
            return true
        let temp = board[i][j]  //记录到board的值
        board[i][j] = '-'   //锁上，因为后续的递归方向是4个方向的，无法保证上一个方向的值
        let res = dfs(i-1, j, board, word, index+1) ||
                    dfs(i+1, j, board, word, index+1) ||
                        dfs(i, j-1, board, word, index+1) ||
                            dfs(i, j+1, board, word, index+1)
        board[i][j] = temp  //恢复现场
        return res
    }

    // 遍历整个board，找到初始位置点
    for(let i=0; i<row; i++) {
        for(let j=0; j<col; j++) {
            if(dfs(i, j, board, word, 0))
                return true
        }
    }
    return false    //没找到
};