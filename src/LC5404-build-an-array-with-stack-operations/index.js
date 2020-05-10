/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  var len = target.length;
  if (!len) return [];

  if (target[len - 1] < n) n = target[len - 1];

  var result = [];
  var i = 0;
  var curr = 0;
  while (++i <= n) {
    if (target[curr] === i) {
      result.push('Push');
      curr++;
    } else {
      result.push('Push');
      result.push('Pop');
    }
  }

  return result;
};

module.exports = buildArray;
