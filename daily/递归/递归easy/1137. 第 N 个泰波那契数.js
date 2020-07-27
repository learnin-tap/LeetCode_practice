/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let res= []
    res[0]=0,res[1]=1,res[2]=1
    if(n==0)
        return 0
    if(n==1 || n==2)
        return 1
    for(let i=3;i<=n;i++)
        res[i]=res[i-3]+res[i-2]+res[i-1]
    return res[n]
};