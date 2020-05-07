/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var l = prices.length - 1;
  if (l <= 0) return 0;

  var result = 0;
  var min = prices[l];
  var max = min;

  while (l--) {
    var i = prices[l];
    if (i > max) max = min = i;
    else if (i < min) result = Math.max(result, max - (min = i));
  }

  return result;
};

module.exports = maxProfit;
