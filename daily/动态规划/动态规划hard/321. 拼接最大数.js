/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
// 先求两个数组分别的所有最大序列，将符合要求的两个序列合并即可求最大值
// 此方法适用其他类似的题
var maxNumber = function(nums1, nums2, k) {
    // 求数组最大序列函数
    const sortMax = (res, k) => {
    let stack = [], drop = res.length - k
    for (let i = 0; i < res.length; i++) {
      while (drop && stack.length && res[i] > stack[stack.length - 1]) {
        stack.pop()
        drop--
      }
      stack.push(res[i])
    }
    return stack.slice(0, k)
  }

    // 合并数组成最大值
    const merge = (n1,n2) => {
        // 取第一个元素
        let res = []
        while(n1.length>0 || n2.length>0) {
            let max = n1 > n2 ? n1 : n2
            res.push(max[0])
            max.shift()
        }
        return res
    }

    let res = []
    for(let i=0; i<=k; i++)
        if(i<=nums1.length && k-i<=nums2.length)
            res.push(merge(sortMax(nums1,i),sortMax(nums2,k-i)))
    return res.sort((a,b)=>{
        if(a>b)
            return -1
        else if(a<b)
            return 1
        else
            return 0
    })[0]
};