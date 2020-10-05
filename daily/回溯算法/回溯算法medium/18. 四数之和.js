/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=> a-b)
    const result = []
    let helper = (start,path) => {
        if(path.length===4) {
            if(path.reduce((sum, cur) => sum+=cur) === target) {
                result.push(path.slice())
            }
            return
        }
        for(let i=start; i<=nums.length; i++) {
            path.push(nums[i])  // 选择
            helper(i+1, path)   // 继续往下选择
            path.pop()          // 撤销选择
        }
    }
    helper(0,[])
    if(!result.length)  //为空则直接返回[]
        return []

    let deleteRepeat = arr => { //数组去重
        let unique = {}
        arr.forEach(item => {
            unique[JSON.stringify(item)] = item
        })
        arr = Object.keys(unique).map(item => {
            return JSON.parse(item)
        })
        return arr
    }
    return deleteRepeat(result)
};