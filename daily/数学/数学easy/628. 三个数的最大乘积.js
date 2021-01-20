/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if(nums.length<3)
        return 0
    let fir=-1001, sec=-1001, thi=-1001 //求三个最大的
    let min1 = 1001, min2 = 1001  //求两个最小的
    for(let i=0; i<nums.length; i++) {
        // 找出三个最大的
        if(nums[i]>fir) {
            thi = sec
            sec = fir
            fir = nums[i]
        }
        else if(nums[i]>sec) {
            thi = sec
            sec = nums[i]
        }
        else if(nums[i]>thi) {
            thi = nums[i]
        }
        // 找出两个最小的
        if(nums[i]<min1) {
            min2 = min1
            min1 = nums[i]
        }
        else if(nums[i]<min2)
            min2 = nums[i]
    }
    // 最大值要么三个最大的乘积，要么两个最小的(负数)和一个最大的乘积
    return Math.max(fir*sec*thi,min1*min2*fir)
};