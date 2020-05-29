/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) return n - 1;

  var quotient = n / 3 >> 0;
  var overage = [3, 4, 6][n % 3];
  var mod = 1000000007;
  var res = 1;

  while (--quotient) res = res * 3 % mod;

  return res * overage % mod;
};

module.exports = cuttingRope;
