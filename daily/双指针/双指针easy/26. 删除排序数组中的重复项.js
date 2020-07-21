/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var sum=0;
    for(let i=0;i<nums.length;i++)
        if(nums[i+1]!=nums[i])
            nums[sum++]=nums[i];
     return sum;
};