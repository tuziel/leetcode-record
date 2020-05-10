/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n === -1) return 1 / x;
  var half = myPow(x, n >> 1);
  if (n & 1) return half * half * x;
  return half * half;
};

module.exports = myPow;
