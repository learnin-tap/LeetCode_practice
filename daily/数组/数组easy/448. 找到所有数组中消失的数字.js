/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i=0; i<nums.length; i++)
        // 下标取绝对值后置为负，没有指到的下标就是结果（即大于0的）
        nums[Math.abs(nums[i])-1] = -Math.abs(nums[Math.abs(nums[i])-1])
    let res = []
    nums.forEach((item,index) => {
        if(item > 0)
            res.push(index+1)
    })
    return res
};