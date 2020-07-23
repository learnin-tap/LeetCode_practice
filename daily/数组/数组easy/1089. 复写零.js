/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let a = []
    for(let i=0;i<arr.length;i++){
        if(a.length==arr.length)
            break
        a.push(arr[i])
        if(arr[i]==0){ 
            a.push(0)
        }
    }
    for(let i=0;i<arr.length;i++)
        arr[i]=a[i]
    return arr
};