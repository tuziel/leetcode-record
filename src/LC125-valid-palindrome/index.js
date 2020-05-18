/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var left = 0;
  var right = s.length - 1;
  if (right <= 0) return true;

  var isLetter = (c) => ('0' <= c && c <= '9') || ('a' <= c && c <= 'z');

  while (left < right) {
    var charL = s[left].toLowerCase();
    var charR = s[right].toLowerCase();
    if (charL === charR) { left++; right--; }
    else if (!isLetter(charL)) { left++; }
    else if (!isLetter(charR)) { right--; }
    else { return false; }
  }

  return true;
};

module.exports = isPalindrome;
