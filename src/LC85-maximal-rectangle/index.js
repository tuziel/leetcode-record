/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (!matrix.length) return 0;
  if (!matrix[0].length) return 0;

  var res = 0;
  matrix.reduce((heights, curr) => {
    heights = curr.map((v, i) => v === '1' ? heights[i] + 1 : 0);
    res = Math.max(res, largestRectangleArea(heights));
    return heights;
  }, new Array(matrix[0].length).fill(0));

  return res;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  var stack = [0];
  var stackIndex = [0];
  var top = (s) => s[s.length - 1];

  var res = 0;
  [...heights, 0].forEach((h, i) => {
    while (top(stack) > h) {
      var curr = stack.pop();
      stackIndex.pop();
      var len = i - top(stackIndex);
      res = Math.max(res, curr * len);
    }

    stack.push(h);
    stackIndex.push(i + 1);
  });

  return Math.max(res, stack.pop() * heights.length);
};

module.exports = maximalRectangle;
