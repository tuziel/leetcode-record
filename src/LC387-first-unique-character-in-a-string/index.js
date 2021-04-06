/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var map = {};
  for (var c of s) map[c] = -~map[c];
  for (var i = 0; i < s.length; i++) if (map[s[i]] === 1) return i;
  return -1;
};

module.exports = firstUniqChar;
