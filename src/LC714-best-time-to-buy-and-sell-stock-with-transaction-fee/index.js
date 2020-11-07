/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  var len = prices.length;
  if (len < 2) return 0;

  var empty = 0;
  var hold = -prices[0] - fee;

  for (var i = 1; i < len; i++) {
    empty = Math.max(empty, hold + prices[i]);
    hold = Math.max(hold, empty - prices[i] - fee);
  }

  return empty;
};

module.exports = maxProfit;
