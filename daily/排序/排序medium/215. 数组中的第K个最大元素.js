/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 选择排序
    // for(let i=0; i<k; i++) {
    //     for(let j=i+1; j<nums.length; j++) {
    //         if(nums[j]>nums[i]){
    //             [nums[i], nums[j]] = [nums[j], nums[i]]
    //         }
    //     }
    // }
    // return nums[k-1]

    // 冒泡排序
    // for(let i=0; i<k; i++) {
    //     for(let j=0; j<nums.length-i-1; j++) {
    //         if(nums[j+1]<nums[j]) {
    //             [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
    //         }
    //     }
    // }
    // return nums[nums.length-k]
	
    // 内置排序
    //return nums.sort((a,b)=>b-a)[k-1]

    // 手写快排
    const quickSort = (arr, left, right) => {
        if(!arr || arr.length==0)  return
        if(left>right)  return
        const key = arr[left]
        let l = left, r = right
        while(l!=r) {
            // 相等情况必须考虑进来且l<r这个条件不能少
            while(arr[r]<=key && l<r)
                r--
            while(arr[l]>=key && l<r)
                l++
            if(l<r) {
                [arr[l], arr[r]] = [arr[r], arr[l]]
            }
        }
        // 交换位置
        arr[left] = arr[l]
        arr[l] = key
        quickSort(arr,left, l-1)
        quickSort(arr, l+1, right)
    }
    quickSort(nums, 0, nums.length-1)
    return nums[k-1]

};