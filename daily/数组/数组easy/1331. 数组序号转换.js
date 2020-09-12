/**
 * @param {number[]} arr
 * @return {number[]}
 */
// 1.利用扩展运算符、解构赋值等形成一个已去重的顺序数组
// 2.查找下标并赋值返回
// 
var arrayRankTransform = function(arr) {
    const sorted = [ ...new Set(arr.concat().sort((a, b) => a - b)) ]
    return arr.map(item=>sorted.indexOf(item)+1)
};