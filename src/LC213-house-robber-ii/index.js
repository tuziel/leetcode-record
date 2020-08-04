/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 3) return Math.max(0, ...nums);
  var index = nums.length + 3;
  var dp = new Array(index);
  dp[--index] = dp[--index] = dp[--index] = 0;

  while (--index) dp[index] = Math.max(dp[index + 2], dp[index + 3]) + nums[index];
  var res = Math.max(dp[1], dp[2]);

  index = nums.length + 2;
  dp[--index] = dp[--index] = dp[--index] = 0;
  while (index--) dp[index] = Math.max(dp[index + 2], dp[index + 3]) + nums[index];
  res = Math.max(res, dp[0], dp[1]);

  return res;
};

module.exports = rob;
