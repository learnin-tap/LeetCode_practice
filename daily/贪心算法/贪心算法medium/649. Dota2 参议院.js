/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const R = [], D = [], n =senate.length
    for(let [index,item] of Array.from(senate).entries())
        if(item=='R')
            R.push(index)
        else
            D.push(index)
    while(R.length && D.length) {
        // 两个阵营的同时比较，+n是为了保证相对顺序不乱
        // 即先把后面的废掉，再废前面的，前面的没除掉+n放到最后面去了，保证了相对顺序
        if(R[0]<D[0])
            R.push(R[0] + n)
         else
            D.push(D[0] + n)
        R.shift()
        D.shift()
    }    
    return R.length ? 'Radiant' : 'Dire'
};