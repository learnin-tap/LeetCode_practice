/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res = ''
    for(let i=0; i<indices.length; i++)
        res += s[indices.indexOf(i)]
    return res 
};