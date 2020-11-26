/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    // 纯暴力，果然超时
    // let sum = 0
    // for(let i=0; i<A.length; i++) {
    //     for(let j=0; j<B.length; j++) {
    //         for(let k=0; k<C.length; k++) {
    //             for(let l=0; l<D.length; l++) {
    //                 if(A[i]+B[j]+C[k]+D[l]==0)
    //                     sum++
    //             }
    //         }
    //     }
    // }
    
    let map = new Map(), sum = 0
    for(let i=0; i<A.length; i++)
        for(let j=0; j<B.length; j++)
            if(map.has(A[i]+B[j]))
                map.set(A[i]+B[j], map.get(A[i]+B[j])+1)
            else
                map.set(A[i]+B[j], 1)
    // 利用哈希表将四重循环降成二重循环            
    // 前面二重循环用哈希记录A和B的所有情况，后面二重循环求哈希表和C、D相加等于0的所有结果
    for(let i=0; i<C.length; i++)
        for(let j=0; j<D.length; j++)
            if(map.has(-C[i]-D[j]))
                sum += map.get(-C[i]-D[j])
    return sum
};