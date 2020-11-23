/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    //按右端元素排序，避免前面元素包住后面元素，如[0,9]盖掉后面的[0,6]，导致漏掉累积
    points.sort((a,b)=>a[1]-b[1])
    // 这种写法时间和空间复杂度消耗都挺大
    // let res = [points[0]], len = res.length
    // for(let i=1; i<points.length; i++) {
    //     let first = res[res.length-1], next = points[i]
    //     if(next[0]>first[1])
    //         res.push(next)
    // }
    // return res.length

    // 这种写法时间、空间复杂度都可以得到一些优化
    let i = 0, sum = 0
    while(i<points.length) {
        const right = points[i][1]
        i++
        while(i<points.length && points[i][0]<=right)
            i++
        sum++
    }
    return sum
};