/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  var len = nums.length;
  var stack = [[0, -1]];
  var max = 0;
  var i, j, n, m;

  var top = () => stack[stack.length - 1];

  for (j = 0; j <= k; j++) {
    n = nums[j];
    while (top()[0] > n) stack.pop();
    stack.push([n, j]);
  }

  for (; j < len; j++) {
    n = nums[j];
    while (top()[0] > n) {
      [m] = stack.pop();
      i = top()[1];
      if (i >= k) continue;
      max = Math.max(max, m * (j - i - 1));
    }
    stack.push([n, j]);
  }

  while (stack.length > 1) {
    [m] = stack.pop();
    i = top()[1];
    if (i >= k) continue;
    max = Math.max(max, m * (len - i - 1));
  }

  return max;
};

module.exports = maximumScore;
