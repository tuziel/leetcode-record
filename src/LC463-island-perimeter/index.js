/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  var rows = grid.length;
  var cols = grid[0].length;
  var res = 0;
  var r, c, n, w, a;

  for (r = 0; r <= rows; r++) {
    for (c = 0; c <= cols; c++) {
      n = w = a = 0;
      if (r < rows && c < cols) n = grid[r][c];
      if (r > 0 && c < cols) w = grid[r - 1][c];
      if (c > 0 && r < rows) a = grid[r][c - 1];
      if (n ^ w) res++;
      if (n ^ a) res++;
    }
  }

  return res;
};

module.exports = islandPerimeter;
