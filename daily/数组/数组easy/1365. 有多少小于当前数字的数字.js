/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const res = []
    for(let i=0; i<nums.length; i++) {
        let sum = 0
        for(let j=0; j<nums.length; j++) {
            if(nums[i]>nums[j] && i!=j)
                sum++
        }
        res.push(sum)
    }
    return res
};