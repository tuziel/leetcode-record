/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  var rows = matrix.length;
  if (!rows) return 0;
  var cols = matrix[0].length;
  if (!cols) return 0;
  var size = rows * cols;
  var dp = new Array(size);
  var getIndex = (x, y) => x * cols + y;
  var getMin = (x, y) => x < y ? x : y;
  var max = 0;
  var a, b, c, d, x;

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      x = getIndex(i, j);
      a = i && j ? dp[x - cols - 1] : 0;
      b = i ? dp[x - cols] : 0;
      c = j ? dp[x - 1] : 0;
      d = dp[x] = matrix[i][j] === '1'
        ? getMin(getMin(a, b), c) + 1
        : 0;
      if (d > max) max = d;
    }
  }
  return max * max;
};

module.exports = maximalSquare;
