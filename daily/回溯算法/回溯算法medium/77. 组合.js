/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = []
    const helper = (start, path) => {
        if(path.length === k) {
            res.push(path.slice())  //数组存的是引用，需要将其拷贝一份加入，不然最后每个元素都一样
            return
        }
        for(let i=start; i<=n; i++) {
            path.push(i)    //选择
            helper(i+1, path)   //向下继续选择
            path.pop()      //撤销选择
        }
    }
    helper(1,[])
    return res
};