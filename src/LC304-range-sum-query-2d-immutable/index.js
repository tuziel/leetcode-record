/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  var rows = matrix.length;
  if (rows === 0) return;
  var cols = matrix[0].length;
  if (cols === 0) return;
  var r, c;

  for (r = 0; r < rows; r++) {
    for (c = 1; c < cols; c++) {
      matrix[r][c] += matrix[r][c - 1];
    }
  }

  for (r = 1; r < rows; r++) {
    for (c = 0; c < cols; c++) {
      matrix[r][c] += matrix[r - 1][c];
    }
  }

  this.prefix = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  var topLeft = (row1 > 0 && col1 > 0) ? this.prefix[row1 - 1][col1 - 1] : 0;
  var top = row1 > 0 ? this.prefix[row1 - 1][col2] : 0;
  var left = col1 > 0 ? this.prefix[row2][col1 - 1] : 0;
  return this.prefix[row2][col2] + topLeft - top - left;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

module.exports = NumMatrix;
