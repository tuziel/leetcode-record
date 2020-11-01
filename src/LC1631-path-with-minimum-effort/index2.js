/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  var rows = heights.length;
  var cols = heights[0].length;
  var left = 0;
  var right = 0;
  var r, c, mid, curr;

  for (r = 0; r < rows; r++) {
    for (c = 0; c < cols; c++) {
      curr = heights[r][c];
      if (right < curr) right = curr;
    }
  }

  var queue, traversed, key;
  while (left <= right) {
    mid = (left + right) >> 1;
    queue = [[0, 0]];
    traversed = [];
    curr = false;
    while (queue.length) {
      [r, c] = queue.shift();
      key = (r << 7) + c;
      if (traversed[key]) continue;
      traversed[key] = 1;

      if (r === rows - 1 && c === cols - 1) {
        curr = true;
        break;
      }
      if (r > 0 && Math.abs(heights[r - 1][c] - heights[r][c]) <= mid) {
        queue.push([r - 1, c]);
      }
      if (c > 0 && Math.abs(heights[r][c - 1] - heights[r][c]) <= mid) {
        queue.push([r, c - 1]);
      }
      if (r < rows - 1 && Math.abs(heights[r + 1][c] - heights[r][c]) <= mid) {
        queue.push([r + 1, c]);
      }
      if (c < cols - 1 && Math.abs(heights[r][c + 1] - heights[r][c]) <= mid) {
        queue.push([r, c + 1]);
      }
    }
    if (left === right) return curr ? left : left + 1;

    if (curr) right = mid - 1;
    else left = mid + 1;
    if (left > right) right = left;
  }

  return 0;
};

module.exports = minimumEffortPath;
