/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==0 || n==1)
        return n
    let res=0,tmp1=0,tmp2=1
    for(let i=2;i<=n;i++){
        res=(tmp1+tmp2)%1000000007
        tmp1=tmp2
        tmp2=res    
    }
    return res
};