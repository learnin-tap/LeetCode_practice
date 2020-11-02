/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // return [...new Set(nums1)].filter(item => nums2.includes(item))
    const res = [], map = {}
    for(let item of nums1)
        map[item] = true
    for(let item of nums2) {
        if(map[item]) {
            res.push(item)
            map[item]  =false
        }
    }
  return res;
};