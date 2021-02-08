/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 横 竖 区间 三部分判重
    let row = {}, col = {}, boxes = {}
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            let num = board[i][j]
            if(num != '.') {
                // 3*3分割的区间索引
                let boxIndex = parseInt(i/3)*3 + parseInt(j/3)
                if(row[i+'-'+num] || col[j+'-'+num] || boxes[boxIndex+'-'+num])
                    return false
                // 以各自方向+不能重复的数字组成唯一键值，若出现第二次，即为重复
                row[i+'-'+num] = true
                col[j+'-'+num] = true
                boxes[boxIndex+'-'+num] = true
            }
        }
    }
    return true
};