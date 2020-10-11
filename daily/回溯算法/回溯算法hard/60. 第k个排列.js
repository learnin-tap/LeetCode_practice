/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let count = 0
    const set = new Set()
    let helper = (temp) => {
        if(temp.length === n) {
            count++
            if(count === k) {
                return temp.join('')
            }
            return
        }
        for(let i=1; i<=n; i++) {
            if(set.has(i))  continue
            set.add(i)
            temp.push(i)
            const res = helper(temp)
            set.delete(i)
            temp.pop()
            if(res) {   //有结果就返回
                return res
            }
        }
    }
    return helper([])    
};