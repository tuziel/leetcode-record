/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  return matrix.some((row) => row.includes(target));
};

module.exports = searchMatrix;
