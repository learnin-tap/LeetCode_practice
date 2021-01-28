/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    //O(n)时间 最高O(n)空间 n为糖果总数
    let set = new Set(candyType)
    let unique = Array.from(set).length
    if(unique>=candyType.length/2)
        return candyType.length/2
    else
        return unique
};