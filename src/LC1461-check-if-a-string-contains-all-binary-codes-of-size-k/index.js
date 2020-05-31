/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  var len = s.length;
  var count = 1 << k;
  var mask = count - 1;
  var cache = new Array(count);
  var index = 0;
  var curr = 0;

  while (index < k - 1) {
    curr = (curr << 1 & mask) + (s[index++] === '1');
  }

  while (index < len) {
    curr = (curr << 1 & mask) + (s[index++] === '1');
    if (!cache[curr]) {
      cache[curr] = 1;
      count--;
    }
  }

  return count === 0;
};

module.exports = hasAllCodes;
