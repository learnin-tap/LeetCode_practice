/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.'), v2 = version2.split('.')  //先分割
    // 短位补零
    if(v1.length>v2.length)
        v2 = v2.concat(new Array(v1.length-v2.length).fill(0))
    else
        v1 = v1.concat(new Array(v2.length-v1.length).fill(0))
    // 进行比较
    for(let i=0; i<v1.length; i++) {
        if(+v1[i]<+v2[i])
            return -1
        if(+v1[i]>+v2[i])
            return 1
    }
    return 0
};