/**
 * @param {number} n
 * @return {number[]}
 */
// 1.找规律，前置补0，后置补1
// 2.递归求解二进制数
// 3.利用parseInt将二进制数转为十进制
var grayCode = function(n) {
    let make = (n) => {
        if(n==0)
            return [0]
        else if(n==1)
            return [0,1]
        else {
            let res = []
            let pre = make(n-1)
            let max = Math.pow(2,n-1)
            for(let i=0;i<pre.length;i++){
                res[i]=`0${pre[i]}`
                res[max+i]=`1${pre[max-i-1]}`
            }
            return res
        }
    }
    return make(n).map( item => parseInt(item,2) )
};