/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [], res = 0, flag = -1   //flag用于记录子串开始的位置
    stack.push(flag)    //栈存放下标，用来比较子串长度
    for(let i=0; i<s.length; i++) {
        if(s[i]=='(')
            stack.push(i)
        else {
            stack.pop() //出栈来匹配左括号
            if(stack.length) {  // 栈未空
                const maxLen = i-stack[stack.length-1] //计算有效子串长度
                res = Math.max(res, maxLen)
            } else {    //栈已空
                stack.push(i)   //此时的i为另一个子串开始的位置
            }
        }
    }
    return res
};