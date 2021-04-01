/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    // 通过中间值来确认最小值的位置
    let left = 0, right = numbers.length-1
    while(left < right) {
        let mid = (left + right) >> 1
        if(numbers[mid] > numbers[right])
            left = mid + 1
        else if(numbers[mid]<numbers[right])
            right = mid
        // 需要注意相等的情况
        else
            right--
    }
    return numbers[left]
};