/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function (grid) {
  var rows = grid.length;
  var cols = grid[0].length;
  var size = rows * cols;
  var dpMax = new Array(size);
  var dpMin = new Array(size);
  dpMax[0] = dpMin[0] = grid[0][0];

  var getIndex = ((r, c) => r * cols + c);
  var i, r, c;

  for (c = 1; c < cols; c++) {
    i = getIndex(0, c);
    dpMax[i] = dpMin[i] = dpMax[i - 1] * grid[0][c];
  }

  for (r = 1; r < rows; r++) {
    i = getIndex(r, 0);
    dpMax[i] = dpMin[i] = dpMax[i - cols] * grid[r][0];
  }

  var val, umax, lmax, umin, lmin;
  for (r = 1; r < rows; r++) {
    for (c = 1; c < cols; c++) {
      i = getIndex(r, c);
      val = grid[r][c];

      umax = dpMax[i - cols] * val;
      lmax = dpMax[i - 1] * val;
      umin = dpMin[i - cols] * val;
      lmin = dpMin[i - 1] * val;

      dpMax[i] = Math.max(umax, lmax, umin, lmin);
      dpMin[i] = Math.min(umax, lmax, umin, lmin);
    }
  }

  return dpMax[size - 1] >= 0 ? dpMax[size - 1] % 1000000007 : -1;
};

module.exports = maxProductPath;
