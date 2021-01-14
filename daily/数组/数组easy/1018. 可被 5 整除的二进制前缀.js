/**
 * @param {number[]} A
 * @return {boolean[]}
 */
// 1.直接转成十进制会越界
// 2. 用10取余的方式不断每一位的结果
var prefixesDivBy5 = function(A) {
    let num = 0, len = A.length
    const arr = new Array(len).fill(false)
    for(let i=0; i<len; i++) {
        num <<= 1
        num += A[i]
        num %= 10
        arr[i] = (num % 5 == 0)
    }
    return arr
};