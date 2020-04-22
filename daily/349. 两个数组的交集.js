/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var res=[];
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            var flag=res.indexOf(nums1[i]);
            if(flag==-1 && nums1[i]==nums2[j])
                res.push(nums1[i]);
        }
    }
    return res;
};
