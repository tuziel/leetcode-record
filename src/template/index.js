/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  var left = 1;
  var right = 1;
  var a, b;

  a = x;
  while ((a = a / 10 >> 0)) right *= 10;

  while (left < right) {
    a = (x / left >> 0) % 10;
    b = (x / right >> 0) % 10;
    if (a !== b) return false;
    left *= 10;
    right /= 10;
  }

  return true;
};

module.exports = isPalindrome;
