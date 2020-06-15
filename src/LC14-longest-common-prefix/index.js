/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var len = strs.length;
  if (len === 0) return '';

  var res = strs[0];
  var next;
  for (var i = 0; i < len; i++) {
    next = strs[i];
    for (var j = 0; j < res.length; j++) {
      if (res[j] !== next[j]) {
        res = res.slice(0, j + 1);
        break;
      }
    }
    if (res === '') return '';
  }

  return res;
};

module.exports = longestCommonPrefix;
