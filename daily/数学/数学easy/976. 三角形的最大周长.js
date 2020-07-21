/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    function compare(num1,num2){    //让sort排序从大到小
        if(num1>num2)
            return -1;
        else if(num1<num2)
            return 1;
        else
            return 0;
    }
    A.sort(compare);    //sort排序默认是从小到大的，需要加这个函数参数反过来
    for(let i=0;i<A.length;i++)
        if(A[i+1]+A[i+2]>A[i]) //只要较小的两边之和大于第三遍就满足三角形形成条件
                return A[i+1]+A[i+2]+A[i];            
    return 0;    //不满足输出0
};