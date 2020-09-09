/**
 * @param {character[]} chars
 * @return {number}
 */
// 1.遍历chars数组，为了节省空间用该数组存放字符和相应长度
// 2.flag记录字符，sum记录长度
// 3.注意将两位数的长度拆分，用解构赋值
// 4.走完循环把最后一项加上并返回
var compress = function(chars) {
    let len=chars.length, flag=chars[0], sum=0
    while(len)
    {
        if(flag != chars[0]) {
            chars.push(flag)
            if(sum > 1)
                chars.push(...String(sum))
            flag = chars[0]
            sum = 0
        }
        chars.shift()
        sum++
        len--
    }
    chars.push(flag)
    if(sum > 1)
        chars.push(...String(sum))
    return chars.length
};