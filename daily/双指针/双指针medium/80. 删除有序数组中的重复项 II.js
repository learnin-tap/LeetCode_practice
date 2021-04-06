/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 2
    for(let i=2; i<nums.length; i++) {
        if(nums[i] != nums[index-2])    //最多出现两次
            nums[index++] = nums[i]
    }
    return index    //返回数组长度
};