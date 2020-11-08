/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  var counts = {};
  var cache = [];
  [].forEach.call(s, (char) => counts[char] = -~counts[char]);
  for (var i in counts) cache[counts[i]] = -~cache[counts[i]];

  var res = 0;
  for (i = cache.length - 1; i > 0; i--) {
    if (cache[i] > 1) {
      res += cache[i] - 1;
      if (cache[i - 1] === undefined) cache[i - 1] = 0;
      cache[i - 1] += cache[i] - 1;
    }
  }
  return res;
};

module.exports = minDeletions;
