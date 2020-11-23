/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  var list = gas.map((n, i) => n - cost[i]);

  var sum = 0;
  var bottom = 0;
  var res = -1;

  list.forEach((n, i) => {
    sum += n;
    if (sum < bottom) {
      res = i;
      bottom = sum;
    }
  });

  return sum >= 0 ? (res + 1) % list.length : - 1;
};

module.exports = canCompleteCircuit;
