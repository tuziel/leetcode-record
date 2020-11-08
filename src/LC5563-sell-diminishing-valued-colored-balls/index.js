/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function (inventory, orders) {
  var B = BigInt;
  orders = B(orders);
  var len = inventory.length;
  inventory = inventory.sort((a, b) => b - a).map((n) => B(n));
  var res = 0n;
  var fold = 1n;
  var count, sum, currOrders;

  for (var i = 0; i < len - 1; i++) {
    count = inventory[i] - inventory[i + 1];
    currOrders = count * fold;
    if (orders < currOrders) break;

    sum = (count * inventory[i] - count * (count - 1n) / 2n) * fold;
    res += sum;
    orders -= currOrders;
    fold++;
  }

  if (orders) {
    count = orders / fold;
    sum = (count * inventory[i] - count * (count - 1n) / 2n) * fold;
    res += sum + (orders % fold) * (inventory[i] - count);
  }

  return parseInt(res % 1000000007n);
};

module.exports = maxProfit;
