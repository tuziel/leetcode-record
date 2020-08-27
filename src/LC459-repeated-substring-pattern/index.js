/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  var len = s.length;
  var max = len >> 1;
  var i = 0;
  var j = 0;

  while (++j <= max) {
    i = 0;
    var k = j;
    while (s[i] === s[k]) {
      i++;
      k++;
    }
    if (k === len) {
      i = j;
      while (s[--i] === s[--k]);
      if (i === -1) return true;
    }
  }

  return false;
};

module.exports = repeatedSubstringPattern;
