/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = []
    let helper = (start,path) => {
        res.push(path.slice())
        for(let i=start; i<nums.length; i++) {
            path.push(nums[i])  //选择
            helper(i+1,path)
            path.pop()  //撤销选择
        }
    }
    helper(0,[])
    return res
};