/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = []
    const helper = (start, path) => {
        if(start == s.length) {
            res.push(path.slice())
            return
        }
        for(let i=start; i<s.length; i++) {
            const rest = s.substring(start, i+1)    //s的前i个字符
            if(isBeginEnd(rest)) {  //是回文串则加入path中
                path.push(rest)
                helper(i+1,path)
                path.pop()
            }
        }
    }
    // 判断是否是回文子串的函数
    const isBeginEnd = item => {
        let start = 0, end = item.length-1
        while(start<=end) {
            if(item[start]!=item[end])
                return false
            start++, end--
        }
        return true
    }

    helper(0,[])
    return res
};