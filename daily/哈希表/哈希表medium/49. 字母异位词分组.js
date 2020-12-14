/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // map键存排序好的单个数组，值存不同的数组
    const map = new Map()
    for(let i=0; i<strs.length; i++) {
        let item = strs[i].split('').sort().join('')
        if(map.has(item)) {
            let temp = map.get(item)
            temp.push(strs[i])
            map.set(item,temp)
        } else {
            map.set(item,[strs[i]])
        }
    }
    return [...map.values()]
};

