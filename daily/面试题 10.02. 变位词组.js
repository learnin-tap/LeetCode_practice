/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// hash方法，先分割 排序，再根据键tempKey添加进map里，最后返回值values
var groupAnagrams = function(strs) {
    let map = new Map()
    strs.forEach(item => {
        let tempKey = item.split('').sort().join('')
        if(map.has(tempKey)){
            map.get(tempKey).push(item)
        }
        else{
            map.set(tempKey,[item])
        }
    })
    return [...map.values()]
};