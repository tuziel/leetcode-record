/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = {};
  for (const c of s) map[c] = -~map[c];
  for (const c of t) {
    if (!map[c]) return c;
    else map[c]--;
  }
};

module.exports = findTheDifference;
