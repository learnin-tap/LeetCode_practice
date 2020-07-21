/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max=nums[0],sum=0;
    for(let i=0;i<nums.length;i++){
        if(sum>0)   //sum为正才有继续累加增大的可能
            sum+=nums[i];
        else        //sum为负sum+nums[i]必小于nums[i]
            sum=nums[i];
        max=Math.max(max,sum);
    }
    return max;
};