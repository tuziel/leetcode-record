/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  var freq = new Map();
  var res = 0;
  var mod = 1000000007;
  var n, m, k;

  for (n of nums) {
    /*
     * 由 a + rev(b) === rev(b) + a
     * 得 a - rev(a) === b - rev(b)
     */
    k = n - reverse(n);
    if (!freq.has(k)) freq.set(k, 0);

    m = freq.get(k);
    res += m;
    if (res > mod) res = res % mod;
    freq.set(k, m + 1);
  }

  return res;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var res = 0;
  while (x) {
    res = res * 10 + x % 10;
    x = x / 10 | 0;
  }
  return res;
};

module.exports = countNicePairs;
