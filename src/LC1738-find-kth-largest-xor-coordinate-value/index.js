/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
  var rows = matrix.length;
  var cols = matrix[0].length;

  var r, c;
  for (r = 0; r < rows; r++) {
    for (c = 1; c < cols; c++) {
      matrix[r][c] ^= matrix[r][c - 1];
    }
  }

  for (r = 1; r < rows; r++) {
    for (c = 0; c < cols; c++) {
      matrix[r][c] ^= matrix[r - 1][c];
    }
  }

  var arr = new Array(rows * cols);
  var i = 0;
  for (r = 0; r < rows; r++) {
    for (c = 0; c < cols; c++) {
      arr[i++] = matrix[r][c];
    }
  }

  return arr.sort((a, b) => b - a)[k - 1];
};

module.exports = kthLargestValue;
