/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    if(k>arr.length)    //不符合题意，直接return
        return 0

    let iterateSum=0,res=0,flag=0
    for(let i=0;i<k;i++)    //求出第一个子数组的和
        iterateSum+=arr[i]
    //第一个子数组就有满足条件的情况
    if(iterateSum*1.0/k>=threshold)
        res++
        
    for(let i=k;i<arr.length;i++){  
        iterateSum = iterateSum+arr[i]-arr[flag++]//用数组最后一个字符取代原子数组第一个，这样循环可以迭代降低时间复杂度
        if(iterateSum*1.0/k>=threshold)
            res++
    }
    return res
};