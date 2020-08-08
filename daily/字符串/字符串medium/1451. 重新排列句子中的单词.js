/**
 * https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js
 * 不同浏览器对sort的实现方式不同，有的是稳定排序有的不是，所以在使用的时候需要注意。
 * Array.prototype.sort 现在在V8 v7.0 / Chrome 70中稳定！
 * 以前，V8对具有10个以上元素的数组使用不稳定的QuickSort。现在，我们使用稳定的TimSort算法。
 * 
 * 本题运行环境 Nodejs 12.16.3，所以此题能够通过
 */
var arrangeWords = function(text) {
    let res = text.toLowerCase().split(' ').sort((a,b)=>a.length-b.length).join(' ')
    return res[0].toUpperCase()+res.slice(1)
};