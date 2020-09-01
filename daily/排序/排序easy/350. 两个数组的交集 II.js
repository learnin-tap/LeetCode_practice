/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 1.把其中一个数组元素存入哈希表中
// 2.遍历另外一个数组的同时用哈希表比对
var intersect = function(nums1, nums2) {
    let res = [], map = new Map()
    nums2.forEach(item=>{
        if(map.has(item))
            map.set(item,map.get(item)+1)
        else
            map.set(item,1)
    })
    for(let i=0; i<nums1.length; i++){
        if(map.get(nums1[i])>0) {
            map.set(nums1[i],map.get(nums1[i])-1)
            res.push(nums1[i])
        }
    }
    return res
};