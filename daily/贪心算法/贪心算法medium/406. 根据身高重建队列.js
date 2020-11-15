/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const res = []
    people.sort((a,b) => b[0]-a[0] || a[1]-b[1])    //确定排序顺序，h 相同则按 k 升序排序
    people.forEach(item => {    //此时people数组已经排好序
        res.splice(item[1],0,item)  //高个先排进来，后面矮个的根本不影响前面高个子
    })
    return res
};