/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if(nums.length<2)
        return nums.length
    let res = 1, flag = 0   //flag表示摆动方向，0表示还没摆动
    let pre, cur
    for(let i=1; i<nums.length; i++) {
        pre = nums[i-1], cur = nums[i]
        // 两数能够交替即满足条件
        if((cur-pre>0 && flag<=0) || (cur-pre)<0 && flag>=0) {
            flag = cur-pre
            res++
        }
    }
    return res
};