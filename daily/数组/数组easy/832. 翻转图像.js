/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    // A.map(item=>item.reverse()).forEach(item=>{
    //     for(let i=0;i<item.length;i++)
    //         item[i] == 0 ? item[i]=1 : item[i] = 0
    // })
    // return A

    return A.map(x => x.map(item =>item=+!item).reverse())
};