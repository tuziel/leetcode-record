/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var len = prices.length;
  if (!len) return 0;

  var idle = 0;
  var hold = -prices[0];
  var cooling = 0;
  for (var i = 1; i < len; i++) {
    [
      idle,
      hold,
      cooling,
    ] = [
      // 空闲 -> 空闲, 冷却 -> 空闲
      Math.max(idle, cooling),
      // 空闲 -> 持仓 (买入) , 持仓 -> 持仓 (不变)
      Math.max(idle - prices[i], hold),
      // 持仓 -> 冷却 (卖出)
      hold + prices[i],
    ];
  }

  return Math.max(cooling, idle);
};

module.exports = maxProfit;
