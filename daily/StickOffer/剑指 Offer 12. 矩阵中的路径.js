/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // ʱ��O(3^word.length*row*col), �ռ�O(K),KΪ�ݹ����ȣ�����K=M*N
    let row = board.length, col = board[0].length

    const dfs = (i, j, board, word, index) => {
        if(i<0 || i>=row || j<0 || j>col || board[i][j]!==word[index])
            return false
        if(index==word.length-1)//word��������
            return true
        let temp = board[i][j]  //��¼��board��ֵ
        board[i][j] = '-'   //���ϣ���Ϊ�����ĵݹ鷽����4������ģ��޷���֤��һ�������ֵ
        let res = dfs(i-1, j, board, word, index+1) ||
                    dfs(i+1, j, board, word, index+1) ||
                        dfs(i, j-1, board, word, index+1) ||
                            dfs(i, j+1, board, word, index+1)
        board[i][j] = temp  //�ָ��ֳ�
        return res
    }

    // ��������board���ҵ���ʼλ�õ�
    for(let i=0; i<row; i++) {
        for(let j=0; j<col; j++) {
            if(dfs(i, j, board, word, 0))
                return true
        }
    }
    return false    //û�ҵ�
};