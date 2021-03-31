/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var top = 0;
  var left = 0;
  var bottom = matrix.length - 1;
  var right = matrix[0].length - 1;

  var result = [];
  var i;
  while (1) {
    for (i = left; i <= right; i++) result.push(matrix[top][i]);
    if (++top > bottom) break;
    for (i = top; i <= bottom; i++)  result.push(matrix[i][right]);
    if (--right < left) break;
    for (i = right; i >= left; i--) result.push(matrix[bottom][i]);
    if (--bottom < top) break;
    for (i = bottom; i >= top; i--) result.push(matrix[i][left]);
    if (++left > right) break;
  }
  return result;
};

module.exports = spiralOrder;
