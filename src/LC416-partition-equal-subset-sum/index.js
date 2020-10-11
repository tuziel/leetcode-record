/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  var len = nums.length;
  var dp = [1];

  var target = nums.reduce((a, b) => a + b) / 2;
  if (target % 1) return false;

  for (var i = 0; i < len; i++) {
    var n = dp.length;
    while (n--) {
      if (dp[n]) {
        var sum = n + nums[i];
        if (sum === target) return true;
        if (sum < target) dp[sum] = 1;
      }
    }
  }

  return false;
};

module.exports = canPartition;
