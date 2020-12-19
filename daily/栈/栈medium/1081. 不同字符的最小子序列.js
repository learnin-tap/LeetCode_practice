/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    const stack = []
    for(let i=0; i<s.length; i++) {
        let item = s[i]
        // 栈中已经存在，跳过
        if(stack.includes(item))
            continue
        // 栈顶元素的值大于遍历元素且后面还有该栈顶元素值，弹栈
        while(stack.length 
                && stack[stack.length-1]>item
                && s.indexOf(stack[stack.length-1],i) > i)
            stack.pop()
        //压栈
        stack.push(item)
    }
    return stack.join('')
};