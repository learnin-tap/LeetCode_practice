/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // 第一版写法，较为笨重
    // let res = []
    // for(let i=0; i<numRows; i++) {
    //     let temp = new Array(i+1)
    //     if(i==0 || i==1)
    //         temp.fill(1)
    //     if(i>1) {
    //         temp[0] = 1, temp[i] = 1
    //         for(let j=1; j<i; j++)
    //             temp[j] = res[i-1][j-1] + res[i-1][j]
    //     }
    //     res.push(temp)
    // }
    // return res

    // 第二版写法
    const res = []
    for(let i=0; i<numRows; i++) {
        const temp = new Array(i+1).fill(1)
        for(let j=1; j<temp.length-1; j++)
            temp[j] = res[i-1][j-1] + res[i-1][j]
        res.push(temp)
    }
    return res
};