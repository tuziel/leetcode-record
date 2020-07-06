/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  var rows = obstacleGrid.length;
  if (!rows) return 0;
  var cols = obstacleGrid[0].length;
  if (!cols) return 0;
  var d = rows - 1;
  var r = cols - 1;
  if (obstacleGrid[d][r] === 1) return 0;
  obstacleGrid[d][r] = 2;

  var dp = [];
  var getIndex = (x, y) => x * cols + y;

  function f(x, y) {
    if (x > d || y > r) return 0;
    var i = getIndex(x, y);
    if (dp[i]) return dp[i];

    var grid = obstacleGrid[x][y];
    if (grid === 1) return 0;
    if (grid === 2) return 1;
    var down = x === d ? 0 : f(x + 1, y);
    var right = y === r ? 0 : f(x, y + 1);
    return dp[i] = right + down;
  }

  return f(0, 0);
};

module.exports = uniquePathsWithObstacles;
