/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  // 时间O(n),空间O(n)
  // let set = new Set()
  // for(let item of nums) {
  //     if(set.has(item))
  //         return item
  //     set.add(item)
  // }

  // 利用索引和值的一对多关系，时间 O(n),空间 O(1)
  let i = 0
  while(i<nums.length) {
      if(nums[i]===i) {
          i++
          continue
      }
      if(nums[i] === nums[nums[i]])
          return nums[i]
      let tmp = nums[i]
      nums[i] = nums[tmp]
      nums[tmp] = tmp
  }
};