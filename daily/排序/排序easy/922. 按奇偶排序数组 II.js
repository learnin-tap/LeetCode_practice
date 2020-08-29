/**
 * @param {number[]} A
 * @return {number[]}
 */
// 还有种写法是再开一个数组出来存放，这种写法时间复杂度比下面的好
var sortArrayByParityII = function(A) {
    for(let i=0 ;i<A.length; i++) {
        if(i%2==0 && A[i]%2!==0) {
            for(let j=i+1; j<A.length; j++){
                if(A[j]%2==0){
                    [ A[i], A[j] ] = [ A[j], A[i] ]
                    break
                }
            }
        }
        else if(i%2!=0 && A[i]%2==0) {
            for(let j=i+1; j<A.length; j++){
                if(A[j]%2!=0){
                    [ A[i], A[j] ] = [ A[j], A[i] ]
                    break
                }
            }
        }
    }
    return A
};