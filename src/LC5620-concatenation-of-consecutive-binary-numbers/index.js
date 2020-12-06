/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  var res = 0;

  for (var i = 1; i <= n; i++) {
    var move = 1;
    var j = i;
    while (j) {
      j >>= 1;
      move <<= 1;
    }
    res = (res * move + i) % 1000000007;
  }

  return res;
};


module.exports = concatenatedBinary;
