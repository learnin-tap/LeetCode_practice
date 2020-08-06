/**
 * @param {number} num
 * @return {string}
 */
// 题目不难，关键是找对单位数字 如 900 400 90 40 9 4对应的情况
// 模拟减法循环走一遍，
var intToRoman = function(num) {
    let sum = 13
    let enums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let chars = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let res=''
    for(let i=0;i<sum;i++){
        while(num>=enums[i])
        {
            res+=chars[i]
            num-=enums[i]
        }
    }
    return res;
};