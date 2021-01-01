/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // 第一版写法
    // if(flowerbed.length==1 && flowerbed[0]==0 && n==1)
    //     return true
    // let sum = 0, len = flowerbed.length
    // for(let i=0; i<len; i++) {
    //     if(
    //         (i==0 && flowerbed[i]==0 && flowerbed[i+1]==0)
    //      || (i==len-1 && flowerbed[len-1]==0 && flowerbed[i-1]==0)
    //      || (i>0 && flowerbed[i]==0 && flowerbed[i-1]==0 && flowerbed[i+1]==0)) 
    //     {
    //         sum++
    //         flowerbed[i] = 1
    //     }
    // }
    // return n<=sum ? true : false

    // 第二版写法,隐式类型转换成布尔优化较大，还有直接操作n，不用sum
    // if(flowerbed.length==1 && !flowerbed[0] && n==1)
    //     return true
    // const len = flowerbed.length
    // for(let i=0; i<len; i++) {
    //     if(
    //         (i==0 && !flowerbed[i] && !flowerbed[i+1])
    //      || (i==len-1 && !flowerbed[len-1] && !flowerbed[i-1])
    //      || (i>0 && !flowerbed[i] && !flowerbed[i-1] && !flowerbed[i+1])) 
    //     {
    //         n--
    //         flowerbed[i] = 1
    //     }
    // }
    // return n<=0

    // 第三版 当前为1，i+=2; 当前为0，能种i+=2,不能种，i++,for改while也可以
    let i = 0, len = flowerbed.length
    for(let i=0; i<len;) {
        if(!flowerbed[i] && (i==len-1 || !flowerbed[i+1])) {
            n--
            i+=2
        } else if(flowerbed[i]) {
            i+=2
        } else {
            i++
        }
    }
    return n<=0
};