/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  var res = 0;
  for (var bit = 0; bit < 32; bit++) {
    if ((1 << bit) & n) res++;
  }
  return res;
};

module.exports = hammingWeight;
