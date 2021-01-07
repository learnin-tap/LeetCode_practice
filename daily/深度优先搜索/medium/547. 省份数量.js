/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const set = new Set(), len = isConnected.length
    let sum = 0
    const dfs = (i) => {
        for(let j=0; j<len; j++)
            if(isConnected[i][j]==1 && !set.has(j)) {
                set.add(j)
                dfs(j)
            }
    }
    for(let i=0; i<len; i++)
        if(!set.has(i)) {
            dfs(i)
            sum++
        }
    return sum  
};