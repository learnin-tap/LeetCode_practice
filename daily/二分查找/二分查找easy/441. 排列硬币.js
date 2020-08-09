/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sum=0
    for(let i=1;i<=n;i++){
        n-=i
        if(n<i+1){
            sum=i
            break
        }
    }
    return sum
};