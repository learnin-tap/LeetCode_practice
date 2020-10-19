/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let stack1 = [], stack2 = []
    for(let item of S)
        item == '#' ? stack1.pop() : stack1.push(item)
    for(let item of T)
        item == '#' ? stack2.pop() : stack2.push(item)
    return stack1.join('') == stack2.join('')
};