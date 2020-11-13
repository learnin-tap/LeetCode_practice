/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const res = new Array(T.length).fill(0)
    for(let i=0; i<T.length; i++) {
        let flag = T[i]
        for(let j=i+1; j<T.length; j++) {
            if(flag<T[j]) {
                res[i] = j-i
                break
            }
        }
    }
    return res
};