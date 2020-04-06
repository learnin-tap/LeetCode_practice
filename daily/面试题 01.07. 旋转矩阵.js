/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var N = matrix.length;
    var temp = new Array();
    for (var i = 0; i < N; i++){
        temp[i] = new Array();
        for (var j = 0; j < N; j++){
            temp[i][j] = matrix[i][j];
     }
  }
   
  for (var i = 0; i < N; i++)
    for (var j = 0; j < N; j++)
      matrix[j][N - i - 1] = temp[i][j];     
};