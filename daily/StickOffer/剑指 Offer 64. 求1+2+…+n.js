/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return n && n + sumNums(n-1)    //����n�ж��Ƿ�Ϊ0����Ϊ��·����
};