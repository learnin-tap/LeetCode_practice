/**
 * @param {string} s
 * @return {string}
 */
// 1.将字符串字典序分割成数组
// 2.用哈希表存储对应字母和出现次数
// 3.用两个数组分别从哈希表中取出祖母和对应次数
// 4.再用数组存放顺序遍历的值（在能取到该字母情况下）,在末尾合并
// 5.偶数顺序，奇数逆序取出来并返回
var sortString = function(s) {
    const map = new Map()
    // s = s.split('').sort((a,b)=>a.localeCompare(b))
    s = s.split('').sort()  //默认字典序
    let len = s.length
    for(let i=0; i<len; i++) {
        if(map.has(s[i]))
            map.set(s[i],map.get(s[i])+1)
        else
            map.set(s[i],1)
    }
    let res = '', flag = 0, keys = [...map.keys()], values = [...map.values()]
    while(len) {
        let item = ''
        for(let i=0; i<values.length; i++) {
            if(values[i]>0) {
                values[i]--
                len--
                item += keys[i]
            }
        }
        if(flag%2==0)
            res+=item
        else
            res+=item.split('').reverse('').join('')
        flag++
    }
    return res
};