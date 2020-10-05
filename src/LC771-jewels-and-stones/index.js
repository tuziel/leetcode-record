/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  var map = {};
  var result = 0;

  var i, len;
  for (i = 0, len = J.length; i < len; i++) map[J[i]] = 1;
  for (i = 0, len = S.length; i < len; i++) result += map[S[i]] ? 1 : 0;

  return result;
};

module.exports = numJewelsInStones;
