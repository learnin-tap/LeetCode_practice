/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let len = nums.length
    if(len<=1)
        return 0
    let high = 0, low = len-1, max = nums[0], min = nums[len-1]
    for(let i=1; i<len; i++) {
        // max = Math.max(max, nums[i])
        // min = Math.min(min, nums[len-i])
        // if(nums[i]<max)
        //     high = i
        // if(nums[len-1-i]>min)
        //     low = len-1-i
        if(nums[i]>=max)    //从左到右找出最后一个破坏递增的数
            max = nums[i]
        else
            high = i
        if(nums[len-i-1]<=min)  //从右到左找到最后一个破坏递减的数
            min = nums[len-i-1]
        else
            low = len-i-1
    }
    return high>low ? high-low+1 : 0
};