/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var len = s.length;
  if (!len) return 0;

  var map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
  var res = 0;
  var last = map[s[0]];
  var curr;
  for (var i = 1; i < len; i++) {
    curr = map[s[i]];
    if (last < curr) res -= last;
    else res += last;
    last = curr;
  }

  return res + last;
};

module.exports = romanToInt;
