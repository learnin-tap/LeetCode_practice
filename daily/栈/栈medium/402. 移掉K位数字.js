/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = []
    for(let i=0; i<num.length; i++) {
        let cur = num[i]
        while(k>0 && stack.length && cur<stack[stack.length-1]) {
            stack.pop()
            k--
        }
        if(cur != '0' || stack.length != 0) // 0 不入栈
            stack.push(cur)
    }
    while(k>0) {
        stack.pop()
        k--
    }
    return stack.length == 0 ? "0" : stack.join('')
};