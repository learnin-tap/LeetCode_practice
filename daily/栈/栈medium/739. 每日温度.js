/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    // 暴力解法
    // const res = new Array(T.length).fill(0)
    // for(let i=0; i<T.length; i++) {
    //     let flag = T[i]
    //     for(let j=i+1; j<T.length; j++) {
    //         if(flag<T[j]) {
    //             res[i] = j-i
    //             break
    //         }
    //     }
    // }
    // return res

    // 单调栈
    const res = new Array(T.length).fill(0)
    const stack = []
    for(let i=T.length-1; i>=0; i--) {
        while(stack.length && T[i]>T[stack[stack.length-1]]) {
            stack.pop()
        }
        if(stack.length) {
            res[i] = stack[stack.length-1] - i
        }
        stack.push(i)
    }
    return res
};