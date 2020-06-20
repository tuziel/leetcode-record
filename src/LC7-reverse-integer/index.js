/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var minus = x < 0;
  var res = 0;
  var mx = 214748364;

  if (minus) x = -x;
  while (x >= 10) {
    res = res * 10 + x % 10;
    x = x / 10 >> 0;
  }

  if (res > mx) return 0;

  res = res * 10 + x % 10;
  return minus ? -res : res;
};

module.exports = reverse;
