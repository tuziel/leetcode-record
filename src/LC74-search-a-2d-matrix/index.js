/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  var rows = matrix.length;
  var cols = matrix[0].length;
  var left = 0;
  var right = rows * cols - 1;

  while (left <= right) {
    var mid = (left + right) >> 1;
    var val = matrix[(mid / cols) | 0][mid % cols];
    if (val === target) return true;
    if (target < val) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};

module.exports = searchMatrix;
