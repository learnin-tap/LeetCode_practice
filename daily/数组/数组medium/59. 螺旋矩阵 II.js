/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let arr = new Array(n).fill(0).map(item=>item = new Array(n).fill(0))
  let left = 0, right = n-1, top = 0, bottom = n-1
  let count = 1
  while(count <= n*n) {
    for(let i=left; i<=right; i++)
      arr[top][i] = count++
    top++
    for(let i=top; i<=bottom; i++)
        arr[i][right] = count++
    right--
    for(let i=right; i>=left; i--)
        arr[bottom][i] = count++
    bottom--
    for(let i=bottom; i>=top; i--)
        arr[i][left] = count++
    left++
  }
  return arr
};