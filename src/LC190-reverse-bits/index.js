/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  var res = 0;
  for (var i = 0; i < 32; i++) {
    var b = n & (1 << i);
    if (b) res += (2 ** (31 - i));
  }
  return res;
};

module.exports = reverseBits;
