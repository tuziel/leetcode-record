/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var len = s.length;
  if (t.length !== len) return false;

  var map = {};
  [].forEach.call(s, (char) => map[char] = -~map[char]);

  for (var i = 0; i < len; i++) {
    var char = t[i];
    if (!map[char]) return false;
    map[char]--;
  }

  return true;
};

module.exports = isAnagram;
