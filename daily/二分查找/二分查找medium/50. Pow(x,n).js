/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n==0)
        return 1
    if(n==1)
        return x
    if(n==-1)
        return 1/x
    //通过正负号，确认参与运算的底数
    const flag = n > 0 ? x : 1/x
    //将n的值缩小一半
    const half = parseInt(n/2, 10)
    const res = myPow(x, half)
    if(n%2) //如果为奇数，需要额外乘一次底数
        return flag*res*res
    return res*res  //如果为偶数
};