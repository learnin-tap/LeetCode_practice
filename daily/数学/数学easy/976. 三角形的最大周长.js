/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((a,b)=>b-a)  //降序，从大到小
    for(let i=0; i<A.length; i++)
        if(A[i+1]+A[i+2]>A[i])
            return A[i]+A[i+1]+A[i+2]   //满足最小的两个边大于最大的那个边就是最大周长的三条边
    return 0
};