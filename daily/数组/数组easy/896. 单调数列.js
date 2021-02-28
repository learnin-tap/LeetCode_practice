/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if(A.length<=1)
        return true
    let start = 0, end = A.length - 1
    let flag =  A[0] <= A[A.length-1] ? 1 : -1   //从大到小顺序为1，逆序为-1
    while(start < end) {
        if(flag==1) {
            if(A[start] > A[start+1] || A[end-1] > A[end])
                return false
        }
        else {
            if(A[start] < A[start+1] || A[end-1] < A[end])
                return false
        }
        start++
        end--
    }
    return true
};