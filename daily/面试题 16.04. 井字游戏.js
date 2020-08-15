/**
 * @param {string[]} board
 * @return {string}
 */
// 1.题目不难就是稍有麻烦
// 2.横向、纵向、主轴、交叉轴四种情况是获胜的情况
// 3.对于第二点需要注意元素必须是X或O，不能为空，这里需要加判断
// 4.四种获胜情况不能满足的话，判断有没有空，有则 Pending
// 5.第四点也不满足的话就是Draw
var tictactoe = function(board) {
    // 将给的参数转为二维数组
    let a = board.join(''),b=new Array(board.length),sum=0
    for(let i=0;i<board.length;i++){
        b[i]=new Array(board.length)
        for(let j=0;j<board.length;j++){
            b[i][j]=a[sum++]
        }
    }
    
    // 横向相等的情况
    for(let i=0;i<b.length;i++){
        let flag=0,temp=b[i],first=temp[0]
        for(let j=0;j<temp.length;j++)
            if(first!=temp[j])
                flag=1
        if(flag==0 && (first=='O' || first=='X'))
            return first
    }

    // 纵向相等的情况
    for(let i=0;i<b.length;i++){
        let flag=0,temp=b[0][i]
        for(let j=0;j<b[i].length;j++)
            if(temp!=b[j][i])
                flag=1
        if(flag==0 && ( temp=='X' || temp=='O'))
            return temp
    }

    // 主轴相等的情况
    let begin=b[0][0],x=0
    for(let i=0;i<b.length;i++)
        if(begin!=b[i][i])
            x=1
    if(x==0 && (begin=='O'||begin=='X')){
        return begin
    }
    
    // 交叉轴相等的情况
    let end=b[b.length-1][0], y=0
    for(let j=0;j<b[0].length;j++)
        if(end==b[j][b.length-1-j])
            y++
    if(y==b.length && (end=='O'||end=='X'))
        return end

    // 不满足以上且存在空位的情况
    if(board.join('').split(' ').length!=1) //去掉空格后数组长度不为一说明原数组有空格
        return "Pending"

    // 不满足以上且不存在空位的情况
    return 'Draw'
};