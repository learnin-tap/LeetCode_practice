/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    // 这种写法不好的地方在于代码冗余
    // 短位补零的办法可以通过concat一个新数组长度的0来解决，如 v1 = v1.concat(new Array(v2.length-v1.length).fill(0))

    // let res1 = version1.split('.'), res2 = version2.split('.')
    // let len = 0
    // if(res1.length>res2.length) {
    //     let mid = res1.length-res2.length
    //     len = res1.length
    //     for(let i=0; i<mid; i++) {
    //         res2.push(0)
    //     }
    // } else {
    //     let mid = res2.length-res1.length
    //     len = res2.length
    //     for(let i=0; i<mid; i++)
    //         res1.push(0)
    // }
    // for(let i=0; i<len; i++) {
    //     if(parseInt(res1[i])===parseInt(res2[i]))
    //         continue
    //     if(parseInt(res1[i])>parseInt(res2[i]))
    //         return 1
    //     if(parseInt(res1[i])<parseInt(res2[i]))
    //         return -1
    // }
    // return 0

    // 优化上面的解法，在循环比较的过程中处理未达到长度的数组
    const ver1 = version1.split('.'), ver2 = version2.split('.')
    for(let i=0; i<Math.max(ver1.length, ver2.length); i++) {
        let item1 = ver1[i] ? parseInt(ver1[i]) : 0
        let item2 = ver2[i] ? parseInt(ver2[i]) : 0
        if(item1!=item2)
            return item1 > item2 ? 1 : -1
    }
    return 0
};