/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    // ͨ���м�ֵ��ȷ����Сֵ��λ��
    let left = 0, right = numbers.length-1
    while(left < right) {
        let mid = (left + right) >> 1
        if(numbers[mid] > numbers[right])
            left = mid + 1
        else if(numbers[mid]<numbers[right])
            right = mid
        // ��Ҫע����ȵ����
        else
            right--
    }
    return numbers[left]
};