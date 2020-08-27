/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
// n = 1 时，直接把盘子从 A 移到 C
// n > 1 时，
// 先把上面 n - 1 个盘子从 A 借助 C 移到 B（子问题，递归）
// 再将最大的盘子从 A 移到 C
// 再将 B 上 n - 1 个盘子从 B 借助 A 移到 C（子问题，递归）
var hanota = function(A, B, C) {
    let len = A.length
    let move = function(len,A,B,C){
        if(len==1)
            C.push(A.pop())
        else{
            move(len-1,A,C,B)
            C.push(A.pop())
            move(len-1,B,A,C)
        }
    }
    move(len,A,B,C)
};