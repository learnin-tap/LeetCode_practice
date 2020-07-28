/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function(A, B) {
    if(A==0)    //终止条件
        return 0
    if(A>B) //减少递归次数，即"吝啬一点"
        [A,B]=[B,A]
    return B+multiply(A-1,B)    //暴力累加 递归
};