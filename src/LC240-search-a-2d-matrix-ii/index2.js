/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  var rows = matrix.length;
  var cols = matrix[0].length;
  var r = rows - 1;
  var c = 0;

  while (r >= 0 && c < cols) {
    var val = matrix[r][c];
    if (val === target) return true;
    if (target < val) r--;
    else c++;
  }

  return false;
};

module.exports = searchMatrix;
