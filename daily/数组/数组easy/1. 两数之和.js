/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//无脑暴力 时间复杂度O(n^2)
var twoSum = function(nums, target) {
    for(var i=0;i<nums.length-1;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j];
            }
        }
    }
    return [0,0];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//map 时间复杂度O(n)
var twoSum = function(nums, target) {
    var m=new Map();
    for(var i=0;i<nums.length;i++){
        if(m[target-nums[i]]!=undefined){
            return [m[target-nums[i]],i];
        }
        m[nums[i]]=i;
    }
    return [];
};



