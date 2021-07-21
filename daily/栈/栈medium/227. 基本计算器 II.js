/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim()    // 去除前后无用空格
    const n = s.length, stack = []
    let num = 0, preSign = '+'
    for(let i=0; i<n; i++) {
        let item = s[i]
        // 如果是数字类型
        if(!isNaN(Number(item)) && item !== ' ' ) {
            num = num * 10 + Number(item)
        }
        // 如果是运算符类型
        if(isNaN(item) || i==n-1) {
            switch(preSign) {
                case '+':
                    stack.push(num)
                    break
                case '-':
                    stack.push(-num)
                    break
                case '*':
                    stack.push(stack.pop() * num)
                    break
                default:
                    stack.push(parseInt(stack.pop() / num))
            }
            // 重置运算符和运算数
            preSign = item
            num = 0
        }
    }
    let res = 0
    while(stack.length) {
        res += stack.pop()
    }
    return res
};