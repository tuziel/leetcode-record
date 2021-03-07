/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  var res = Infinity;

  function backtrack(sum, index) {
    var diffS = target - sum;
    var diffR = target - res;
    var isVaild = Math.abs(diffS) <= Math.abs(diffR);
    if (sum > res && !isVaild) return;

    if (index === toppingCosts.length) {
      if (isVaild) {
        if (Math.abs(diffS) < Math.abs(diffR)) res = sum;
        else if (sum < res) res = sum;
      }
      return;
    }

    backtrack(sum, index + 1);
    backtrack(sum + toppingCosts[index], index + 1);
    backtrack(sum + toppingCosts[index] * 2, index + 1);
  }

  for (var cost of baseCosts) backtrack(cost, 0);

  return res;
};

module.exports = closestCost;
