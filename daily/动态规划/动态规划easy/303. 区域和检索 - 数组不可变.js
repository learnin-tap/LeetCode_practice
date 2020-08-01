/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = []
    let sum = 0
    nums.forEach((item)=>{
        let newval = item+sum
        this.arr.push(newval)
        sum = newval
    })    
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i===0)
        return this.arr[j]
    return this.arr[j]-this.arr[i-1]
        
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */