/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  var rows = grid.length;
  if (!rows) return 0;
  var cols = grid[0].length;
  if (!cols) return 0;

  rows--;
  var j = --cols;
  while (j--) grid[rows][j] += grid[rows][j + 1];

  while (rows--) {
    j = cols;
    grid[rows][j] += grid[rows + 1][j];
    while (j--) {
      grid[rows][j] += Math.min(grid[rows + 1][j], grid[rows][j + 1]);
    }
  }

  return grid[0][0];
};

module.exports = minPathSum;
