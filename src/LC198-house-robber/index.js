/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var index = nums.length + 3;
  var dp = new Array(index);
  dp[--index] = dp[--index] = dp[--index] = 0;

  var max = (a, b) => a > b ? a : b;

  while (index--) dp[index] = max(dp[index + 2], dp[index + 3]) + nums[index];

  return max(dp[0], dp[1]);
};

module.exports = rob;
