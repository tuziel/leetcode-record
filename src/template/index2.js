/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;
  var y = 0;
  var z;

  while (x > y) {
    z = x % 10;
    x = x / 10 >> 0;
    y = y * 10 + z;
  }

  if (y > x) y = y / 10 >> 0;

  return x === y;
};

module.exports = isPalindrome;
