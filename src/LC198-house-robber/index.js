/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var dp = [];
  dp[-3] = dp[-2] = dp[-1] = 0;
  var len = nums.length;

  var max = (a, b) => a > b ? a : b;

  for (var index = 0; index < nums.length; index++) {
    dp[index] = max(dp[index - 3], dp[index - 2]) + max(0, nums[index]);
  }

  return max(dp[len - 2], dp[len - 1]);
};

module.exports = rob;
