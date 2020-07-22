/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var a = [], index = 0
    a[0]= ''   //初始化数组第一项，便于后面拼接字符
    for(let i=0;i<s.length;i++){
        if(s[i]==' ' && i>0 && s[i-1]!=' '){
            index++
            a[index]=''
        }
        if(s[i]!=' '){
            a[index]+=s[i]
        }
    }

    var b=''    //b保存返回的结果
    for(let i=a.length-1;i>=0;i--){
        for(let j=0;j<a[i].length;j++){
                b+=a[i][j]
        }
        b+=' '  //每个单词后面加空格
    }

    // while(b.charAt(0)==' ')
    // {
    //     b=b.substring(1,b.length)
    // }
    // while(b.charAt(b.length-1)==' ')
    // {
    //     b=b.substring(0,b.length-1)
    // }
    b=b.replace(/^\s+|\s+$/gm, '')  //利用正则去除首尾空格，比上面写法快
    return b
};