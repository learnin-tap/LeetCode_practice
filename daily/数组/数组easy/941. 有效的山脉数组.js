/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if(A.length<3)  //保证山脉形状长度至少要为3
        return false
    let max = A[0], index = 0
    for(let i=0; i<A.length; i++) { //找出最大元素，并记录下标
        if(A[i]>max) {
            max = A[i]
            index = i
        }
    }
    if(index==0 || index==A.length-1)   //如果最大值在开始或结尾则不存在转折点，不符合题意
        return false
    for(let i=1; i<index; i++)  //前半段不满足递增则不符合条件
        if(A[i]<=A[i-1])
            return false
    for(let i=index+1; i<A.length; i++) //后半段不满足递减也不符合条件
        if(A[i]>=A[i-1])
            return false
    return true //前面都满足了就是山脉数组
};