/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
  // 法一：正则\s为只要出现空白就匹配，如空格 tab，\S则相反
  //return s.replace(/\s/g, '%20')
  // 下面的效率比上面的高，因为上面的还得判断其他类型的空白，如\r \n \t \v \f
  // return s.replace(/[ ]/g, '%20')

  //法二：扫描一趟
  // let res = ''
  // for(let item of s) {
  //     // res += item.charCodeAt() === 32 ? '%20' : item
  //     res += item === ' ' ? '%20' : item
  // }
  // return res

  //法三：利用API
  return s.split(' ').join('%20')
};