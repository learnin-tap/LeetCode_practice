/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // for(let i=0; i<nums.length; i++) {
    //     for(let j=i+1; j<i+1+k&&j<nums.length; j++) {
    //         if(nums[i]==nums[j]){
    //             return true
    //         }
    //     }
    // }
    // return false

    let set = new Set()
    for(let i=0 ;i<nums.length; i++) {
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
        if(set.size>k)
            set.delete(nums[i-k])
    }
    return false
};