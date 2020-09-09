/**
 * @param {number} n
 * @return {number}
 */
var cache = [];
var minDays = function (n) {
  if (n === 0) return 0;
  if (cache[n]) return cache[n];
  var min = Infinity;

  if (n % 3 === 0) min = Math.min(min, minDays(n / 3));
  if (n % 2 === 0) min = Math.min(min, minDays(n >>> 1));
  if (n % 3 || n % 2) min = Math.min(min, minDays(n - 1));

  return cache[n] = min + 1;
};

module.exports = minDays;
