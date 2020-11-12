/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let i = 0, j = 1
    while(i<A.length && j<A.length) {
        while(i<A.length && A[i] % 2 == 0)    //偶数索引上的为偶数
            i += 2
        while(i<A.length && A[j] % 2 == 1)    //奇数索引上的为奇数
            j += 2
        if(i<A.length && j<A.length) {  //越界循环直接结束
            [A[i],A[j]] = [A[j],A[i]]
            i += 2
            j += 2
        }
    }
    return A
};