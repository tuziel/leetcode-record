/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var len = s.length * 2 - 1;
  var res = '';

  for (var mid = 0; mid < len; mid++) {
    var left = mid - 1;
    var right = mid + 1;

    for (; ; left--, right++) {
      if (left < 0) break;
      if (right >= len) break;
      if (s[left >> 1] !== s[(right + 1) >> 1]) break;
    }

    if ((right - left) >> 1 > res.length) {
      res = s.slice((left + 1) >> 1, (right + 1) >> 1);
    }
  }

  return res;
};

module.exports = longestPalindrome;
