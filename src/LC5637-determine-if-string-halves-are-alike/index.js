/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  return getHash(s.slice(0, s.length >> 1)) === getHash(s.slice(s.length >> 1, s.length));
};

function getHash(s) {
  var set = new Set('aeiouAEIOU');
  var res = 0;
  for (var c of s) if (set[c]) res++;
  return res;
}

module.exports = halvesAreAlike;
