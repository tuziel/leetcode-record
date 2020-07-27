/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  var len = s.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) res[indices[i]] = s[i];
  return res.join('');
};

module.exports = restoreString;
