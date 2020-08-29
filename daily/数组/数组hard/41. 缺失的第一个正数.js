/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let res = nums.filter(item=>item>0).sort((a,b)=>a-b)    //过滤非正整数并升序
    if(res.length==0)   //为空返回最小正整数1
        return 1
    for(let i=0; i<res.length; i++) {
        if(!res.includes(i+1))  //先查找有没有索引，没有则返回索引，即为最小的正整数
            return i+1
        if(res[i+1]-res[i]>1)   //非连续的数，返回前一个数+1，即为缺少的最小正整数
            return res[i]+1
    }
    return res.pop()+1  //都符合条件则返回最后一个数+1，即为缺少的最小正整数
};