/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 无脑写法
    // if(x<0)
    //     return false
    // let sum=0, temp=x
    // while(temp) {
    //     temp = parseInt(temp/10)
    //     sum++
    // }

    // let flag = 0
    // while(sum--) {
    //     let a = parseInt(x/(10**flag)) % 10
    //     let b = parseInt(x/(10**sum))%10
    //     if(a!==b)
    //         return false
    //     flag++
    // }
    // return true

    // 较优雅的写法
    if(x<0)
        return false
    let res = 0, temp = x
    while(temp) {
        res = res*10 + temp%10
        temp = parseInt(temp/10)
    }
    return x==res
};