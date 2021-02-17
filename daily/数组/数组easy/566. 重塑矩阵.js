/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    // 再申请一个一维数组转化二维数组的值
    // let sum = 0, temp = []
    // for(let i=0; i<nums.length; i++) {
    //     for(let j=0; j<nums[0].length; j++) {
    //         temp.push(nums[i][j])
    //     }
    //     sum += nums[i].length
    // }
    // if(sum != r*c)
    //     return nums
    // sum = 0
    // let res = new Array(r).fill(0).map(() => new Array(c))
    // for(let i=0; i<r; i++) {
    //     for(let j=0; j<c; j++) {
    //         res[i][j] = temp[sum++]
    //     }
    // }
    // return res


    // 一次遍历优化
    let row = nums.length, col = nums[0].length
    let res = new Array(r).fill(0).map(() => new Array(c))
    if(row*col != r*c)
        return nums
    for(let i=0; i<row; i++) {
        for(let j=0; j<col; j++) {
            let index = i * col + j
            res[parseInt(index/c)][index%c] = nums[i][j]
        }
    }
    return res
};