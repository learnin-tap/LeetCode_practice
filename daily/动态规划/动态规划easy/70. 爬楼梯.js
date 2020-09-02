/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let step0 = 1, step1 = 1, step2 = 2
    if(n==0 || n==1)
        return 1
    for(let i=1; i<=n; i++) {
        step0 = step1
        step1 = step2
        step2 = step0+step1
    }
    return step0
};