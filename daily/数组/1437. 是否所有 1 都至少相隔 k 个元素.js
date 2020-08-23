/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 1.两种解法应该都是暴力
// 2.第一种是原地往前查找
// 3.第二种是先存起来再对比索引值
var kLengthApart = function(nums, k) {
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]==1 && i>0){
    //         for(let j=0;j<k;j++){
    //             if(nums[i-k+j]!=0){
    //                 return false
    //             }
    //         }
    //     }
    // }
    
    let res = []
    for(let i=0;i<nums.length;i++)
        if(nums[i]==1)
            res.push(i)
    for(let i=0;i<res.length-1;i++){
        if(res[i+1]-res[i]<=k)
            return false
    }
    return true
};