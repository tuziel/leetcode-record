/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  var len = heights.length;
  var cache = [];
  var res = 0;
  var width, height, j;

  var max = (a, b) => a > b ? a : b;

  for (var i = 0; i < len; i++) {
    if (cache[i]) continue;
    width = 1;
    height = heights[i];

    j = i;
    while (--j >= 0 && heights[j] >= height) {
      width++;
    }

    j = i;
    while (++j < len && height <= heights[j]) {
      if (height === heights[j]) cache[j] = 1;
      width++;
    }

    cache[i] = width * height;
    res = max(res, cache[i]);
  }

  return res;
};

module.exports = largestRectangleArea;
