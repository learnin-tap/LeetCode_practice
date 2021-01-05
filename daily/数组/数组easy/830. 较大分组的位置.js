/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    // 栈写法
    // let res = [], stack = []
    // for(let i=0; i<s.length; i++) {
    //     if(s[stack[stack.length-1]]!==s[i]) {
    //         if(stack.length>=3)
    //             res.push([stack[0], stack[stack.length-1]])
    //         stack = []
    //     }
    //     stack.push(i)
    // }
    // if(stack.length>=3)
    //     res.push([stack[0],stack[stack.length-1]])
    // return res

    // 改用常数变量降低空间复杂度
    let res = [], num = 1
    for(let i=0; i<s.length; i++) {
        if(i==s.length-1 || s[i]!=s[i+1]) {
            if(num>=3)
                res.push([i-num+1, i])
            num = 1
        }
        else
            num++
    }
    return res
};