/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const arr_s = new Array(256),arr_t = new Array(256)
    for(let i=0; i<s.length; i++) {
        // 判断前一次出现的位置是否相同，未出现则为undefined
        if(arr_s[s[i].charCodeAt()]!=arr_t[t[i].charCodeAt()])
            return false
        arr_s[s[i].charCodeAt()] = i
        arr_t[t[i].charCodeAt()] = i
    }
    return true

    // indexof查找数组中每个元素第一次出现的位置是否相等即可
    // for(let i=0; i<s.length; i++)
    //     if(s.indexOf(s[i])!=t.indexOf(t[i]))
    //         return false
    // return true
};