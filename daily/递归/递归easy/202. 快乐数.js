/**
 * @param {number} n
 * @return {boolean}
 */
// 1. 终止条件并不是固定的，需要找到终止条件
// 2. 当值大到一定程度就会发现遍历过程中会出现相同输入的情况，这就是递归终止条件
var isHappy = function(n) {
    const fn = (n) => {
        if(once.includes(n))
            return false
        once.push(n)
        let res = 0
        n.toString().split('').forEach(item => {
            res += item**2
        })
        if(res == 1)
            return true
        else
            return fn(res)
    }
    const once = []
    return  fn(n)
};