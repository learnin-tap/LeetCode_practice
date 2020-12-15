/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let module = new Map(), map = new Map()
    let temp= s.split(' ') //单词按照空格分隔
    if(pattern.length!=temp.length)  //长度不一致肯定不遵循规律
        return false
    // module 存匹配的规律, map 存单词
    for(let i=0; i<pattern.length; i++) {
        if(module.has(pattern[i])) {
            let maze = module.get(pattern[i])
            maze.push(i)
            module.set(pattern[i], maze)
        }
        else
            module.set(pattern[i], [i])   //值存数组的下标

        if(map.has(temp[i])) {
            let maze = map.get(temp[i])
            maze.push(i)
            map.set(temp[i], maze)
        }
        else
            map.set(temp[i], [i])
    }
    // 取出哈希中的值，即存放的下标数组，进行比较
    let a = [...module.values()], b = [...map.values()]
    for(let i=0; i<a.length; i++)
        if(a[i].join('')!==b[i].join(''))
            return false
    return true
};