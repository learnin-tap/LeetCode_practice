/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = []
    let flag = new Array(nums.length).fill(false)
    nums.sort((a,b)=>a-b)
    const helper = (path, start) => {
        if(path.length == nums.length){
            res.push(path.slice())
            return
        }
        for(let i=0; i<nums.length; i++) {
            // 使用过不能被选择，还有就是前一个没有被使用过，它和前一个一样的话也不能被选择
            // 因为已经排序好了，相同的顺序只能一个
            // 比如 112 第二个1根本没有机会做带头的，因为已经先被第一个1执行完了
            if(flag[i] || (i>0 && !flag[i-1] && nums[i]==nums[i-1]) )
                continue
            path.push(nums[i])  //选择
            flag[i] = true
            helper(path, i+1)   //继续向下选择
            path.pop()  //撤销选择
            flag[i] = false
        }
    }
    helper([],0)
    return res
};