/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// 先对数组合并后按第一个数值进行升序
// 以第二个值来比较 不断迭代，合并数组
// 符合要求的就添加到结果中，最后返回
var insert = function(intervals, newInterval) {
    const res = []
    intervals.push(newInterval)
    intervals.sort((a,b)=>a[0]-b[0])
    const len = intervals.length
    let i = 0
    while(i<len) {
        let [left, right] = intervals[i]
        while(i<len-1 && right>=intervals[i+1][0]) {
            right = Math.max(intervals[i+1][1], right)
            i++
        }
        res.push([left, right])
        i++
    }
    return res
};