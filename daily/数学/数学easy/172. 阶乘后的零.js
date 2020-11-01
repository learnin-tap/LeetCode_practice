/**
 * @param {number} n
 * @return {number}
 */
// 一道数学题
// 1. 求有几个尾数10相当于求 10为因子的元素右多少个
// 2. 求10位因子的元素右多少个相当于求2和5为因子的个数有多少个
// 3. 2为因子的数明显大于5为因子的数，于是就变成了求5为因子的数有多少个
// 4. 一个O(log n)的循环即可求解
var trailingZeroes = function(n) {
    let sum = 0
    // 时间复杂度过高
    // for(let i=5; i<=n; i+=5) {
    //     let temp = i
    //     if(temp%5 == 0) {
    //         while(temp %5 ==0 && temp != 0) {
    //             temp /= 5
    //             sum++
    //         }
    //     }
    // }
    while(n) {
        n = parseInt(n/5)
        sum += n
    }
    return sum
};