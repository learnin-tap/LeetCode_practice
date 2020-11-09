/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    // const sum = []
    // points.forEach((item,index)=>{
    //     sum.push([Math.sqrt(item[0]**2+item[1]**2), index]) //记录离原点的距离和下标
    // })
    // sum.sort((a,b)=>a[0]-b[0])  
    // const res = []
    // for(let i=0; i<K; i++) {
    //     let [val, index] = sum[i]
    //     res.push(points[index]) //利用之前记录的下标找到最接近原点的K个点
    // }
    // return res

    // 试试这个一行代码的
    return points.sort((a,b)=>(a[0]**2+a[1]**2)-(b[0]**2+b[1]**2)).slice(0,K)

};