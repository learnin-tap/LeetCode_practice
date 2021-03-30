/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
  if(matrix.length <= 0)
      return false
  // 从右上角(左下角同理)看像一颗二分树，时间O(m+n), 空间O(1)
  let m = 0, n = matrix[0].length-1
  while(m < matrix.length && n >= 0) {
      if(matrix[m][n] === target)
          return true
      if(matrix[m][n] < target) {
          m++
      } else if(matrix[m][n] > target) {
          n--
      }
  }
  return false
};