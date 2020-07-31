/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    for(let i=s.length-1;i>=0;i--){     //出除尾部空格
        if(s.charAt(i)!=' ')
            break
        s=s.substring(0,i)
    }
    let flag = -1   //flag初始值为-1
    flag = s.lastIndexOf(' ',s.length-1)    //查找最后一个空格位置
    if(flag!=-1)
        return s.length-1-flag
    return s.length
};