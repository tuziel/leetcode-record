/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  var matrix = new Array(n).fill().map(() => new Array(n));
  var top = 0;
  var left = 0;
  var bottom = n - 1;
  var right = n - 1;

  var num = 1;
  var index;
  while (1) {
    for (index = left; index <= right; index++) {
      matrix[top][index] = num++;
    }
    if (++top > bottom) break;
    for (index = top; index <= bottom; index++) {
      matrix[index][right] = num++;
    }
    if (--right < left) break;
    for (index = right; index >= left; index--) {
      matrix[bottom][index] = num++;
    }
    if (--bottom < top) break;
    for (index = bottom; index >= top; index--) {
      matrix[index][left] = num++;
    }
    if (++left > right) break;
  }

  return matrix;
};

module.exports = generateMatrix;
