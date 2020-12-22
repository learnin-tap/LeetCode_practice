/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // 解法一：利用哈希
    // let map = new Map()
    // for(let i=0; i<s.length; i++) {
    //     if(map.get(s[i]))
    //         map.set(s[i], [map.get(s[i])[0]+1, map.get(s[i])[1]])
    //     else
    //         map.set(s[i], [1, i])
    // }
    // // 将 map 转成数组
    // let arr = [...map.values()]
    // for(let i=0; i<arr.length; i++)
    //     if(arr[i][0]==1)
    //         return arr[i][1]
    // return -1

    // 解法二：利用字母对应的ASCII码值
    // let arr = new Array(256).fill(0)
    // for(let item of s)
    //     arr[item.charCodeAt()]++
    // for(let i=0; i<s.length; i++)
    //     if(arr[s[i].charCodeAt()]==1)
    //         return i
    // return -1

    // 解法三：利用indexOf和lastIndexOf
    for(let item of s)
        if(s.indexOf(item)==s.lastIndexOf(item))
            return s.indexOf(item)
    return -1
};
