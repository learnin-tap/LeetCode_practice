/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    // let sum = 0
    // for(let i=0; i<S.length; i++) {
    //     if(J.includes(S[i]))
    //         sum++
    // }
    // return sum

    let set = new Set(), sum = 0
    for(let i=0; i<J.length; i++)
        set.add(J[i])
    for(let i=0; i<S.length; i++)
        if(set.has(S[i]))
            sum++
    return sum
};