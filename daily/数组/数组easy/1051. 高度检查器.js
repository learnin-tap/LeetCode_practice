/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let res = [...heights], sum=0
    for(let i=0;i<res.length;i++)
        if(res[i]!=heights.sort(function(a,b){return a-b})[i])
            sum++
    return sum
};