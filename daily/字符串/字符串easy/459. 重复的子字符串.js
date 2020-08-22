/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // for(let i=1; i<s.length; i++) {  //此为暴力解法，效率很低
    //     let res=s.substr(0,i), flag=0
    //     for(let j=i; j<s.length; j=j+i) {
    //         if(res == s.substr(j, i)){
    //             flag++
    //         }
    //     }
    //     // console.log(flag==(s.length-i)/i)
    //     if(flag==( (s.length-i)/i ) && flag>=1)
    //         return true
    // }
    // return false
    
    return /^(\w+)\1+$/.test(s)     //此为正则解法，比较直接

    // return (s+s).slice(1,-1).includes(s)    //通过将两s字符串拼接再去掉首尾，比较是否包含s字符串，巧妙解法
};