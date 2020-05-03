/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  var end = nums.length - 1;
  if (end <= 0) return 0;

  var min = (a, b) => a < b ? a : b;
  var dp = new Array(nums.length);
  var i, j, m;
  dp[i = end] = 0;

  while (i--) {
    j = i + nums[i];
    if (j < end) {
      m = Infinity;
      while (j > i) m = min(m, dp[j--] + 1);
      dp[i] = m;
    } else {
      dp[i] = 1;
    }
  }

  return dp[0];
};

module.exports = jump;
