/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var left = -1;
  var right = s.length;
  var codeL, codeR;

  while (++left < --right) {
    while (isUselessCode(codeL = getUppercaseCode(s[left])) && left < right) left++;
    while (isUselessCode(codeR = getUppercaseCode(s[right])) && left < right) right--;
    if (codeL !== codeR) return false;
  }

  return true;
};

function getUppercaseCode(char) {
  var code = char.charCodeAt();
  return 97 <= code && code <= 122 ? code - 32 : code;
}

function isUselessCode(code) {
  return code < 48 || (57 < code && code < 65) || 90 < code;
}

module.exports = isPalindrome;
