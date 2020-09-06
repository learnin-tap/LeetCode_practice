/**
 * @param {string} s
 * @return {string}
 */
// 1.用栈来消除大小写字母
// 2.return时将数组转换成字符串
var makeGood = function(s) {
    let stack = []
    for(let i=0; i<s.length; i++) {
        if(s[i]>stack[stack.length-1] && s[i].toUpperCase()==stack[stack.length-1]){
            stack.pop()
            continue
        }
        if(s[i]<stack[stack.length-1] && s[i].toLowerCase()==stack[stack.length-1]){
            stack.pop()
            continue          
        }
        stack.push(s[i])
    }
    return stack.join('')
};