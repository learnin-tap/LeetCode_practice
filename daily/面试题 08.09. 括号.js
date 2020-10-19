/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    let helper = (left, right, str) => {
        if(left == 0 && right == 0) { //递归结束条件
            res.push(str)
            return
        }
        if(left>0)      //还有 '('剩余的情况
            helper(left-1, right, str+'(')
        if(right>left)  // ')'剩余数量不能小于 '('
            helper(left, right-1, str+')')  
    }
    helper(n, n, '')
    return res
};