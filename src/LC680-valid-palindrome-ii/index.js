/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, left, right, flag) {
  if (!left) left = 0;
  if (!right) right = s.length - 1;
  if (right <= 0) return true;

  while (left < right) {
    if (s[left++] !== s[right--]) {
      return flag ? false : (validPalindrome(s, left, right + 1, true) || validPalindrome(s, left - 1, right, true));
    }
  }

  return true;
};

module.exports = validPalindrome;
