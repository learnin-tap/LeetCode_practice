/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // 未合理利用js API的写法
    // let res_x = String(x.toString(2)),res_y = String(y.toString(2)),sum = 0
    // let length = res_x.length > res_y.length ? res_x.length : res_y.length
    // res_x = new Array(length-res_x.length).fill(0).join('') + res_x
    // res_y = new Array(length-res_y.length).fill(0).join('') + res_y
    // for(let i=0; i<length; i++)
    //     if(res_x[i]!=res_y[i])
    //         sum++
    // return sum

    // 合理利用api的写法
    let arrA = x.toString(2).padStart(32,0).split('')
    let arrB = y.toString(2).padStart(32,0).split('')
    let sum = 0
    for(let i = arrA.length - 1 ; i >= 0; i--)
        if(arrA[i] != arrB[i])
            sum++
    return sum
};