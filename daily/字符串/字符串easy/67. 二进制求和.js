/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('').reverse(), b = b.split('').reverse()
    let res = '', flag = 0
    for(let i=0; i<a.length || i<b.length; i++) {
        if(!a[i])   a[i] = 0
        if(!b[i])   b[i] = 0
        a[i] = +a[i] + +b[i] + flag
        flag = 0
        if(a[i]>1) {
            a[i] %= 2
            flag = 1
        }
    }
    if(flag === 1)
        a.push(1)
    return a.reverse().join('')
};