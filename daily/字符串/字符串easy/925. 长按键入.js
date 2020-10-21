/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if(name.length>typed.length)    //如果输入的值都没预期结果的字符串长，则肯定不满足
        return false
    for(let i=0; i<typed.length; i++) {
        if(typed[i]==name[i])
            continue
        else if(typed[i] == typed[i-1]) {
            typed = typed.substring(0,i-1) + typed.substring(i)
            i--
        }
        else
            return false
        
        if(name.length>typed.length)    //切割字符串过程中如果发现长度都没预期结果长，则肯定不满足
            return false
    }
    return true
};