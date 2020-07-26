/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  var rows = matrix.length;
  if (!rows) return 0;
  var cols = matrix[0].length;
  if (!cols) return 0;
  var size = rows * cols;
  var dp = new Array(size);
  var getIndex = (r, c) => r * cols + c;
  var max = 0;

  var bottom = rows - 1;
  var right = cols - 1;
  function dfs(r, c) {
    var index = getIndex(r, c);
    if (dp[index]) return dp[index];

    var curr = matrix[r][c];
    var res = 0;

    if (r > 0 && curr < matrix[r - 1][c]) res = Math.max(res, dfs(r - 1, c));
    if (r < bottom && curr < matrix[r + 1][c]) res = Math.max(res, dfs(r + 1, c));
    if (c > 0 && curr < matrix[r][c - 1]) res = Math.max(res, dfs(r, c - 1));
    if (c < right && curr < matrix[r][c + 1]) res = Math.max(res, dfs(r, c + 1));

    return dp[index] = res + 1;
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      max = Math.max(max, dfs(i, j));
    }
  }

  return max;
};

module.exports = longestIncreasingPath;
