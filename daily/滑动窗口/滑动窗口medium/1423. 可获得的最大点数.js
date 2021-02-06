/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) { 
    let len = cardPoints.length - k, temp = 0, res = Number.MAX_VALUE
    let count = cardPoints.reduce((sum, cur) => sum += cur, 0)
    for(let i=0; i<cardPoints.length; i++) {
        temp += cardPoints[i]
        if(i>=len)
            temp -= cardPoints[i-len]
        if(i>=len-1)
            res = Math.min(res, temp)
    }
    return count-res
};