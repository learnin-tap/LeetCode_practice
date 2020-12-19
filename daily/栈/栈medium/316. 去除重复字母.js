/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const stack = []
    for(let i=0; i<s.length; i++) {
        // 栈中已经包含了就跳过
        if(stack.includes(s[i]))
            continue
        // 栈中未包含，栈顶的值比遍历的该元素大且后面还有该栈顶值，弹栈
        while(stack.length 
                && stack[stack.length-1] > s[i] 
                && s.indexOf(stack[stack.length-1],i) > i)
            stack.pop()
        // 压栈
        stack.push(s[i])
    }
    return stack.join('')
};