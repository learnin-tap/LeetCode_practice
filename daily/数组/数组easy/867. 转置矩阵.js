/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    var B=[];
    for(var i=0;i<A[0].length;i++){
        var temp=[];
        for(var j=0;j<A.length;j++){
            temp.push(A[j][i]);
        }
        B.push(temp);
    }
    return B;
};