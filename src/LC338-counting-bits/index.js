/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  var dp = [0];
  for (var i = 1; i <= num; i++) {
    // i & (i - 1) 去掉最后一个 1
    dp[i] = dp[i & (i - 1)] + 1;
  }
  return dp;
};

module.exports = countBits;
