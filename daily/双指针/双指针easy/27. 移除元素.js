/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var sum=0;
        for(let i=0;i<nums.length;i++)
            if(nums[i]!=val)
                nums[sum++]=nums[i];
    return sum;
};