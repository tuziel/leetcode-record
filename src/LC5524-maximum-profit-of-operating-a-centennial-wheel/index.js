/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
  if (boardingCost * 4 < runningCost) return -1;

  var len = customers.length;
  var limit = runningCost / boardingCost;
  var earns = [0, 1, 2, 3, 4].map((n) => boardingCost * n - runningCost);
  var max = 0;
  var current = 0;
  var result = 0;
  var num = 0;
  var i;

  for (i = 0; i < len; i++) {
    num += customers[i];

    current += earns[Math.min(num, 4)];
    if (current > max) {
      max = current;
      result = i + 1;
    }

    num -= 4;
    if (num < 0) num = 0;
  }

  var d = Math.floor(num / 4);
  var m = num % 4;
  current += earns[4] * d;
  if (m > limit) current += earns[m];

  if (current > max) {
    max = current;
    result = len + d;
    if (m > limit) result++;
  }

  if (result <= 0) return -1;
  return result;
};

module.exports = minOperationsMaxProfit;
