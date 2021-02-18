/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
    let res = 0 //需要反转的次数
    for(let i=0; i<=A.length-K; i++) {
        //值为0就要计数翻转
        if(!A[i]) {
            res++
            for(let j=i; j<i+K; j++)
                A[j] = A[j] == 1 ? 0 : 1
        }
    }
    if(A.indexOf(0) == -1)
        return res
    return -1 
};