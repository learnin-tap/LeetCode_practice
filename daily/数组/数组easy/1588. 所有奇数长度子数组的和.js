/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0
    for(let j=0; j<arr.length; j++) {
        let len = 1 
        while(len <= arr.length) {
            let temp = 0
            if(j+len <= arr.length) {
                for(let k=j; k<j+len; k++) {
                    temp += arr[k]
                }
                sum += temp
            }
            len = len + 2
        }
    }
    return sum
};