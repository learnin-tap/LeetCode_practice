/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [], used = {}
    let helper = (start, path) => {
        if(path.length == nums.length) {
            res.push(path.slice())
            return
        }
        for(let i=0; i<nums.length; i++) {
            // 这种写法用到includes查找时间为O(n)，增加了时间复杂度
            // if(!path.includes(nums[i])) {
            //     path.push(nums[i])
            //     helper(i+1, path)
            //     path.pop()
            // }
            if(used[nums[i]])
                continue
            path.push(nums[i])
            used[nums[i]] = true
            helper(i+1, path)
            path.pop()
            used[nums[i]] = false
        }
    }
    helper(0,[])
    return res
};