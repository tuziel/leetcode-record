/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  var len = prices.length;
  var res = new Array(len);
  var i, j, k;

  for (i = 0; i < len; i++) {
    k = 0;
    for (j = i + 1; j < len; j++) {
      if (prices[i] >= prices[j]) {
        k = prices[j];
        break;
      }
    }
    res[i] = prices[i] - k;
  }

  return res;
};

module.exports = finalPrices;
