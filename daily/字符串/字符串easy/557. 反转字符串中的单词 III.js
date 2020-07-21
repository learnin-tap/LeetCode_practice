/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let temp = [] , res = ''
    for(let i=0;i<s.length;i++){
        if(s[i]!=' ' && i!=s.length-1)  //最后一项单独处理
            temp.push(s[i])
        else if(s[i]==' ' || i==s.length-1){
            if(i==s.length-1)   //处理最后一项
                temp.push(s[i])
            let len=temp.length
            for(let j=0;j<len;j++){     //反转字符并加入res中
                res+=temp[temp.length-1]
                temp.pop()
            }
            if(i!=s.length-1)       //补字符空格
                res+=' '
        }
    }
    return res
};