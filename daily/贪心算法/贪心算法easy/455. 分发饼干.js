/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b), s.sort((a,b)=>a-b)  //贪心，需要先排序一下
    let sum = 0
    // 双重for循环有点浪费，可用while改良
    // for(let i=0; i<g.length; i++) {
    //     for(let j=0; j<s.length; j++) {
    //         if(g[i]<=s[j]) {
    //             sum++
    //             s[j] = -1
    //             break
    //         }
    //     }
    // }
    let i = 0, j = 0
    while(i<g.length && j<s.length) {
        if(g[i]<=s[j]) {
            sum++
            i++
            j++
        }
        else
            j++ 
    }
    return sum
};