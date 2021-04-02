/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  var len = k * 2;
  if (!len) return 0;
  var dp = new Array(len).fill(-Infinity);

  prices.forEach((n) => {
    for (var i = len - 1; i > 0; i--) {
      dp[i] = Math.max(dp[i], dp[i - 1] + (i & 1 ? n : -n));
    }
    dp[0] = Math.max(dp[0], -n);
  });

  return dp.reduce((res, n) => Math.max(res, n), 0);
};

module.exports = maxProfit;
