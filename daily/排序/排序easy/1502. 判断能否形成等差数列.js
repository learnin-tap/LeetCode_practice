/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if(arr.length==0 || arr.length==1 || arr.length==2)
        return true
    arr.sort((a,b)=>a-b)
    let flag = arr[1]-arr[0]
    for(let i=1; i<arr.length; i++)
        if(arr[i]-arr[i-1] != flag)
            return false
    return true
};