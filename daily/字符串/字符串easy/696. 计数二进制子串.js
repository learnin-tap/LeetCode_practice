/**
 * @param {string} s
 * @return {number}
 */
// 把字符串中相邻的相同字符累积个数放进数组里面，如"00110011"放进数组是 [2,2,2,2]
// 对数组进行遍历 取相邻元素的最小值累加即为最终答案
var countBinarySubstrings = function(s) {
    let res=0,sum=1,a=[]
    for(let i=0;i<s.length;i++){    //当s[i]走到最后一个数时，必不可能和它下一个不存在的数相等
        if(s[i]===s[i+1])   
            sum++
        else{
            a.push(sum)     //因为for循环那里多加了一个长度，所以可以把最后的数字加进来
            sum=1
        }
    }
    for(let i=1;i<a.length;i++){
        res+=Math.min(a[i],a[i-1])  //取所有0 1组合的最小值 进行累加
    }
    return res
};