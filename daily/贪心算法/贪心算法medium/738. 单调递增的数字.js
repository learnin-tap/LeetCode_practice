/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    // // 暴力会超时
    // let flag = 0
    // while(N) {
    //     flag = 0
    //     let temp = (N + '').split('')
    //     for(let i=0; i<temp.length; i++) {
    //         flag = i
    //         if(temp[i]>temp[i+1])
    //             break
    //     }
    //     if(flag==temp.length-1)
    //         return N
    //     N--
    // }
    // return 0

    // 贪心，如果遇到后面比前面小的情况，将前面-1，后面全变成9
    if(N < 10)  return N
    let temp = N.toString().split('')
    for(let i=1; i<temp.length; i++) {
        if(temp[i]<temp[i-1]) {   
            temp.fill('9',i,temp.length)
            temp[i-1]--
            i = 0
        }
    }
    return temp.join('')
};
