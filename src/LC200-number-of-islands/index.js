/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  var rows = grid.length;
  var cols = grid[0].length;

  function dfs(r, c) {
    if (grid[r][c] === '0') return false;
    grid[r][c] = '0';

    if (r > 0) dfs(r - 1, c);
    if (c > 0) dfs(r, c - 1);
    if (r < rows - 1) dfs(r + 1, c);
    if (c < cols - 1) dfs(r, c + 1);

    return true;
  }

  var res = 0;
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      res += dfs(r, c);
    }
  }
  return res;
};

module.exports = numIslands;
