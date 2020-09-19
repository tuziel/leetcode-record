/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  var rows = grid.length;
  if (!rows) return 0;
  var cols = grid[0].length;
  if (!cols) return 0;
  var size = rows * cols;
  var top = 0;
  var bottom = Infinity;
  var middle;

  var r, c, n;
  for (r = 0; r < rows; r++) {
    for (c = 0; c < rows; c++) {
      n = grid[r][c];
      if (n < bottom) bottom = n;
      if (n > top) top = n;
    }
  }

  while (bottom < top) {
    middle = (top + bottom) >> 1;

    if (canConnect(middle)) top = middle - 1;
    else bottom = middle + 1;
  }

  function canConnect(height) {
    var traversed = new Array(size);
    var getIndex = (r, c) => r * cols + c;
    var stack = [[0, 0]];
    var r, c, i;

    while (stack.length) {
      [r, c] = stack.pop();
      i = getIndex(r, c);

      if (traversed[i]) continue;
      traversed[i] = 1;
      if (height < grid[r][c]) continue;
      if (i === size - 1) return true;

      if (r > 0) stack.push([r - 1, c]);
      if (c < cols - 1) stack.push([r, c + 1]);
      if (r < rows - 1) stack.push([r + 1, c]);
      if (c > 0) stack.push([r, c - 1]);
    }

    return false;
  }

  return canConnect(bottom) ? bottom : bottom + 1;
};

module.exports = swimInWater;
