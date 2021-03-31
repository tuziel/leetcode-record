/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  var lenS = s.length;
  var lenP = p.length;

  var cache = [];
  function backtrack(indexS, indexP) {
    if (indexP === lenP) return indexS === lenS;
    var key = (indexS << 15) + indexP;
    if (cache[key] !== undefined) return cache[key];

    var charS = s[indexS];
    var charP = p[indexP];

    if (charS === charP || charP === '?') {
      return cache[key] = backtrack(indexS + 1, indexP + 1);
    } else if (charP === '*') {
      for (var i = indexS; i <= lenS; i++) {
        if (backtrack(i, indexP + 1)) return true;
      }
    }

    return cache[key] = false;
  }

  return backtrack(0, 0);
};

module.exports = isMatch;
