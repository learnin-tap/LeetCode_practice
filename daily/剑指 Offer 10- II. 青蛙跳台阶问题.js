/**
 * @param {number} n
 * @return {number}
 */
//和斐波拉契差不多的意思，我的思路是第n个台阶基于第n-1个和第n-2个上，即可以选择跳一步或者跳两步，然后就是暴力 递归
var numWays = function(n) {
    if(n==1 || n==0)
        return 1
    if(n==2)
        return 2
    let a = []
    a[0]=1,a[1]=1,a[2]=2
    for(let i=3;i<=n;i++){
        a[i]=(a[i-1]+a[i-2])%1000000007
    }
    return a[n]
};