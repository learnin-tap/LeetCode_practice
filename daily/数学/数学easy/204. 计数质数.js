/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // 质数的偶数倍是不是质数，埃氏筛写法
    // let sum = 0, flag = new Array(n).fill(true)
    // for(let i=2; i<=n; i++) {
    //     if(flag[i]) {
    //         sum++
    //         for(let j=2*i; j<=n; j+=i) {
    //             flag[j] = false
    //         }
    //     }
    // }
    // return sum

    // 上述写法会有重复，如10, 2的时候标记标记一次，5的时候又会标记一次，菜鸡想不到啥奇数筛写法，先空着
    // 以下是对数组的优化，类型数组舍弃了js内部对数组的优化，直接访问原始的二进制数据
    let sum = 0, flag = new Int8Array(n).fill(1)
    for(let i=2; i<=n; i++) {
        if(flag[i]) {
            sum++
            for(let j=2*i; j<=n; j+=i)
                flag[j] = 0
        }
    }
    return sum
};