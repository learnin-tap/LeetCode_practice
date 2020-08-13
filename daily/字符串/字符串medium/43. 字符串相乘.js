/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 前几天做了一个相似的 415. 字符串相加
// 1.初始化一个足够容纳两数乘积的数组，如三位数与三位数相乘，结果不会超过六位，就定义一个填充六个0的数组
// 2.对应位置模拟做数学题那样相乘，不断迭代
// 3.抹掉前置的0，在最开始把结果为0的已经过滤掉了，所以不用考虑结果为0的情况
var multiply = function(num1, num2) {
    if(num1==0 || num2==0)  //结果为0的先过滤掉，不然会影响最后去0操作
        return '0'
    let a = new Array(num1.length + num2.length).fill(0)
    for(let i=num1.length-1;i>=0;i--){
        for(let j=num2.length-1;j>=0;j--){
            let sum_two = Number(num1[i]) * Number(num2[j]) 
            let sum_all = sum_two + a[i+j+1]
            a[i+j+1] = sum_all % 10
            a[i+j] += Math.floor(sum_all / 10)
            // a[i+j] += sum_all/10 | 0   //这种写法更简洁 
        }
    }
    while(a[0]==0){ a.shift() }
    return a.join('')
};