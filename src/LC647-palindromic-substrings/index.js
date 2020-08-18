/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  var res = s.length;
  var end = res * 2 - 3;

  var curr, left, right;
  for (curr = 0; curr < end; curr++) {
    left = curr >> 1;
    right = curr + 3 >> 1;
    while (left >= 0 && right <= end) {
      if (s[left--] === s[right++]) res++;
      else break;
    }
  }

  return res;
};

module.exports = countSubstrings;
