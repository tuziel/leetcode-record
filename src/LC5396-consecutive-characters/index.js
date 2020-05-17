/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  var index = s.length;
  var res = 0;
  var count = 1;
  var char = '';
  var max = (a, b) => a > b ? a : b;

  while (index--) {
    if (s[index] === char) {
      count++;
    } else {
      res = max(res, count);
      count = 1;
    }
    char = s[index];
  }

  return max(res, count);
};

module.exports = maxPower;
