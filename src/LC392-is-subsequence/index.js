/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === '') return true;
  var i = s.length - 1;
  var j = t.length;

  while (j--) {
    if (s[i] === t[j]) i--;
    if (i < 0) return true;
  }

  return false;
};

module.exports = isSubsequence;
