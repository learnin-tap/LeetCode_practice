/**
 * @param {string} s
 * @return {string}
 */
// 1. 遇上中括号嵌套，需要用栈存储信息
var decodeString = function(s) {
    const numStack= [], strStack = []   //分别记录倍数和子串的栈
    let num = 0, res = ''   //分别记录单个的倍数和子串
    for(const item of s) {
        if(!isNaN(item))    //数字需要转化成重复次数
            num = num * 10 + Number(item)
        else if(item == '[') {    //倍数和子串入栈
            numStack.push(num)
            num = 0
            strStack.push(res)
            res = ''
        } else if(item == ']') {  //倍数和子串出栈
            let times = numStack.pop()  //获取拷贝次数
            res = strStack.pop() + res.repeat(times)    //构建子串
        } else {    //追加字符为子串
            res += item
        }
    }
    return res
};