/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  var border = matrix[0].length;

  for (var row of matrix) {
    var left = 0;
    var right = border;

    while (left <= right) {
      var mid = (left + right) >> 1;
      if (row[mid] === target) return true;
      if (target < row[mid]) right = mid - 1;
      else left = mid + 1;
    }
    border = right;
  }

  return false;
};

module.exports = searchMatrix;
