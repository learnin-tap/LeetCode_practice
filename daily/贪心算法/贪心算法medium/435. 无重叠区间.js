/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // // 和下一个比较，删除交叉且较大的区间
    // intervals.sort((a, b)=>a[0]-b[0])
    // let res = 0
    // for(let i=0; i<intervals.length-1; i++) {
    //     let [a, b] = intervals[i], [c, d] = intervals[i+1]
    //     if(b>c || b>d) {
    //         res++
    //         let j = b > d ? i : i+1 //哪个区间大删哪个
    //         intervals.splice(j, 1)
    //         --i
    //     }
    // }
    // return res
    
    // 排序后取第一个区间的右区间，通过比较左区间和pre比较是否交叉
    if(!intervals.length)
        return 0
    intervals.sort((a, b) => a[1]-b[1])
    let res = 0, pre = intervals[0][1]
    for(let i=1; i<intervals.length; i++) {
        let [a, b] = intervals[i]
        a < pre ? res++ : pre = b
    }
    return res
};