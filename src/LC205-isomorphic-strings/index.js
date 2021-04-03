/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  return _.isEqual(format(s), format(t));
};

function format(s) {
  var keys = [];
  var key = 1;
  return [].map.call(s, (c) => keys[c] || (keys[c] = key++));
}

module.exports = isIsomorphic;
