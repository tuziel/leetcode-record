/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) return 0;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (x === 1) return 1;

  var res = 1;
  while (n) {
    if (n & 1) res *= x;
    x *= x;
    n >>>= 1;
  }
  return res;
};

module.exports = myPow;
