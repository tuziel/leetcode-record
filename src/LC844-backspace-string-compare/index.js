/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  var i = S.length;
  var j = T.length;
  var c;

  while (i > 0 || j > 0) {
    c = 1;
    while (c--) if (S[--i] === '#') c += 2;
    c = 1;
    while (c--) if (T[--j] === '#') c += 2;
    if (S[i] !== T[j]) return false;
  }

  return true;
};

module.exports = backspaceCompare;
