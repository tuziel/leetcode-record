/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) return n - 1;
  var quotient = n / 3 >> 0;
  var mod = n % 3;
  var countThree = mod === 1 ? quotient - 1 : quotient;
  var countTwo = mod === 0 ? 0 : 3 - mod;

  return Math.pow(3, countThree) * Math.pow(2, countTwo);
};

module.exports = cuttingRope;
