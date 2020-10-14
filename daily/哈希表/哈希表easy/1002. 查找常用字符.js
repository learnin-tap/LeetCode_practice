/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    if(!A)
        return []
    let map = new Map(), res = []
    for(let c of A[0])
        map.has(c) ? map.set(c, map.get(c)+1) : map.set(c, 1)
    for(let i=1; i<A.length; i++) {
        let nextMap = new Map()     //统计后面字符数量
        for(let item of A[i])
            nextMap.has(item) ? nextMap.set(item, nextMap.get(item)+1) : nextMap.set(item, 1)
        for(let [key,value] of map) //计算相同字符数量
            map.set(key, Math.min(value, nextMap.get(key)||0))
    }
    
    for(let [key,value] of map) //拼接结果
        if(value)
            res = res.concat(Array.from({length:value}).fill(key))
    return res
};