/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  var len = matrix.length;
  var n = len - 1;
  var m = len / 2;
  var x = Math.ceil(m);
  var y = Math.floor(m);

  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[n - j][i];
      matrix[n - j][i] = matrix[n - i][n - j];
      matrix[n - i][n - j] = matrix[j][n - i];
      matrix[j][n - i] = temp;
    }
  }
};

module.exports = rotate;
