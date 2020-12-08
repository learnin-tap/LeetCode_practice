/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    const helper = (start, path, target) => {
        if(target<0)
            return
        if(target==0)
            return res.push(path.slice())
        // 不能回头访问前面的元素
        for(let i=start; i<candidates.length; i++) {
            path.push(candidates[i])
            helper(i, path, target-candidates[i])
            path.pop()
        }
    }
    helper(0, [], target)
    return res
};