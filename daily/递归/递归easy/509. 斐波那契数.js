/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // 递归写法
    // if(n==0)
    //     return 0
    // if(n==1)
    //     return 1
    // return fib(n-1) + fib(n-2)

    // 非递归写法
    if(n==0)
        return 0
    if(n==1)
        return 1
    let p = 0, q = 1, r = 1
    for(let i=2; i<n; i++) {
        p = q,
        q = r,
        r = p + q
    }
    return r
};