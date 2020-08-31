/**
 * @param {string} s
 * @return {string}
 */
// 1.将字符串字典序分割成数组
// 2.用哈希表存储对应字母和出现次数
// 3.用两个数组分别从哈希表中取出祖母和对应次数
// 4.再用一个二维数组存放顺序遍历的值（在能取到该字母情况下）
// 5.偶数顺序，奇数逆序取出来并返回
var sortString = function(s) {
    let map = new Map()
    s=s.split('').sort().join('')
    for(let i=0; i<s.length; i++) {
        if(map.has(s[i]))
            map.set(s[i],map.get(s[i])+1)
        else
            map.set(s[i],1)
    }
    let m = [...map.values()], n = [...map.keys()], sum = 0, count = 0, res= []
    m.forEach(item=>{sum += item})
    while(sum)
    {
        res[count]=[]
        for(let i=0;i<m.length;i++){
            if(m[i]>0){
                res[count].push(n[i])
                sum--
                m[i]--
            }
        }
        count++
    }
    let result = ''
    for(let i=0;i<res.length;i++){
        if(i%2==0)
            result+=res[i].join('')
        else
            result+=res[i].reverse().join('')
    }
    return result
};