/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const CODE_A = 65
    const countArr = new Array(26).fill(0)
    for(let char of tasks)
        countArr[char.charCodeAt(0)-CODE_A]++
    countArr.sort((a,b)=>b-a)
    
    const max = countArr[0] // 单独任务的最大值
    let maxCount = 1    // 同为最大值的数量
    for(let i=1; i<countArr.length; i++) {
        // 排序后，当不相等时，即可跳出
        if(countArr[i]!=max)  break
        maxCount++
    }
    console.log(maxCount, max)
    // 必须填充的数量,这里需要好好理解
    const res = (max-1) * (n+1) + maxCount
    // 与任务比较取较大值
    return Math.max(res, tasks.length)
};