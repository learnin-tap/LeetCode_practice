/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    // 直接处理A换算之后比K小的情况，不会越界
    if(A.length<String(K).length) {
        A = Number(A.join('')) + K
        return String(A).split('')
    }
    // 取余递进方式求A很大的情况
    let flag = 0
    A = A.reverse(), K = String(K).split('').reverse().join('').padEnd(A.length, 0)
    for(let i=0; i<A.length; i++) {
        let temp = A[i] + Number(K[i]) + flag 
        flag = temp>=10 ? 1 : 0
        A[i] = temp % 10
    }
    flag>0 && A.push(flag)  //最后一位还能递进的话要加入
    return A.reverse()
};