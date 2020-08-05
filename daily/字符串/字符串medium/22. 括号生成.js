/**
 * @param {number} n
 * @return {string[]}
 */
// 很经典的dfs+剪枝题
//  1. dfs递归查找，先找左括号，再找右括号
//  2. 先对左子树进行搜索，当左括号数>右括号数，必定不符合要求，剪掉
//  3. 当左右括号数都为0，结束递归
var generateParenthesis = function(n) {
    let res= []
    dfs('',n,n,res)
    return  res
};

function dfs(str,left,right,res){
    if(left==0 && right==0){
        res.push(str)
        return
    }
    if(left>right)
        return
    if(left>0){
        dfs(str+'(',left-1,right,res)
    }
    if(right>0){
        dfs(str+')',left,right-1,res)
    }
}