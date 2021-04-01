/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var dp = [-Infinity, -Infinity, -Infinity, -Infinity];

  prices.forEach((price) => {
    for (var i = 3; i > 0; i--) {
      dp[i] = Math.max(dp[i], dp[i - 1] + (i & 1 ? price : -price));
    }
    dp[0] = Math.max(dp[0], -price);
  });

  return Math.max(0, ...dp);
};

module.exports = maxProfit;
