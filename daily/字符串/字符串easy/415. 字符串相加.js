/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 当还有值可以加或者有余数可以加的时候循环就不停止
var addStrings = function(num1, num2) {
    let res='',len1=num1.length-1,len2=num2.length-1,flag=0
    while(len1>=0 || len2>=0 || flag>0){
        if(len1>=0) flag+=Number(num1[len1--])
        if(len2>=0) flag+=Number(num2[len2--])
        res+=flag%10
        flag=Math.floor(flag/10)
    }
    return res.split("").reverse().join("")
};