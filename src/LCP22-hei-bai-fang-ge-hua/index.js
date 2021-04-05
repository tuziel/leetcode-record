/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var paintingPlan = function (n, k) {
  if (n * n === k) return 1;
  var result = 0;

  for (var r = 0; r < n; r++) {
    for (var c = 0; c < n; c++) {
      if ((r * n) + c * (n - r) === k) {
        result += Combination(r, n) * Combination(c, n);
      }
    }
  }

  return result;
};

function Combination(r, n) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function factorial(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) result *= i;
  return result;
}

module.exports = paintingPlan;
