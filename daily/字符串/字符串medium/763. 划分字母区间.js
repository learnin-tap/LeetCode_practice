/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const res = [], maxPositioons = []
    for(let i=0; i<S.length; i++)
        maxPositioons[S[i]] = i //存放字母的最远位置
    let start = 0, curMax = 0
    for(let i=0; i<S.length;  i++) {
        curMax = Math.max(curMax, maxPositioons[S[i]])  //更新已遍历字母的最远位置
        if(i == curMax) {
            res.push(i-start+1) //切割之后加入结果中
            start = i+1 //更新切割字母的开始位置
        }
    }
    return res
}