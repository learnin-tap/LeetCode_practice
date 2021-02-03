/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    // 类似田忌赛马问题，O(n*logn)时间，O(n)空间，n为A和B的长度
    let res = []
    A.sort((a,b)=>a-b)  //对A先进行排序
    for(let item of B) {
        let index = binarySearch(A, item)
        if(index<A.length) {    //在范围内说明找到了满足条件的
            res.push(A[index])
            A.splice(index, 1)
        } else {    //未满足条件
            let temp = A.shift()
            res.push(temp)
        }
    }
    return res
};

// 二分查找
function binarySearch(arr, target) {
    let left = 0, right = arr.length
    while(left<right) {
        let mid = left + ((right-left)>>1)
        if(arr[mid] <= target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
}
