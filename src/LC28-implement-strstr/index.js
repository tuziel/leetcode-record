/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  var lenH = haystack.length;
  var lenN = needle.length;
  if (needle === '') return 0;

  var bor = lenH - lenN + 1;
  for (var i = 0; i < bor; i++) {
    for (var j = 0; j < lenN; j++) {
      if (haystack[i + j] !== needle[j]) break;
    }
    if (j === lenN) return i;
  }

  return -1;
};

module.exports = strStr;
