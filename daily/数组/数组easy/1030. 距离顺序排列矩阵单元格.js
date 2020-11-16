/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    const res = []
    for(let i=0; i<R; i++)
        for(let j=0; j<C; j++)
            res.push([i,j,Math.abs(i-r0)+Math.abs(j-c0)])
    res.sort((a,b)=>a[2]-b[2])
    // 巧用 map 直接处理并返回结果，妙啊
    return res.map(item=>{item.length=2;return item})
};