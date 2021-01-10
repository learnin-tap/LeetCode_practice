/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    // 栈写法
    // if(!nums.length)
    //     return []
    // let res = [], stack = [nums[0]]
    // for(let i=1; i<nums.length; i++) {
    //     if(nums[i]==stack[stack.length-1]+1)
    //         stack.push(nums[i])
    //     else {
    //         if(stack.length==1)
    //             res.push(`${stack[0]}`)
    //         else
    //             res.push(`${stack[0]}->${stack[stack.length-1]}`)
    //         stack = [nums[i]]
    //     }
    // }
    // // 末尾的数需要单独处理，因为无比较对象
    // if(stack.length==1)
    //     res.push(`${stack[0]}`)
    // else
    //     res.push(`${stack[0]}->${stack[stack.length-1]}`)            
    // return res

    // 常数空间复杂度的优化
    let i = 0, res = []
    while(i<nums.length) {
        const low = i
        i++
        while(i<nums.length && nums[i]==nums[i-1]+1)
            i++
        const high = i-1
        let temp = `${nums[low]}`
        // 满足该条件则有多个元素
        if(low<high) {
            temp = `${nums[low]}->${nums[high]}`
        }
        res.push(temp)
    }
    return res
};