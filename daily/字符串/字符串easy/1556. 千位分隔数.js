/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  n = String(n)
  let ans = []
  while(n.length) {
    ans.unshift(n.slice(-3))
    if(n.length>3)
      ans.unshift('.')
    // ������substring����Ϊn.length-3����ȡ������
    n = n.substring(0, n.length-3)
  }
  return ans.join('')
};