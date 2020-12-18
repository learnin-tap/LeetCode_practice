/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // 解法一: 将字母转成数字，然后通过数值求差值再转回字符即结果
    // let s_sum = 0, t_sum = 0
    // for(let item of s)
    //     s_sum += item.charCodeAt()
    // for(let item of t)
    //     t_sum +=item.charCodeAt()
    // const res = t_sum-s_sum
    // return String.fromCharCode(res)

    // 解法二: 利用位运算 ^ ,按位异或，a ^ a = 0, a ^ 0 = a
    // 把两个字符拼接成一个字符，出现奇数次的就是结果
    s = s + t
    let res = 0
    for(let item of s)
        res ^= item.charCodeAt()
    return String.fromCharCode(res)
};