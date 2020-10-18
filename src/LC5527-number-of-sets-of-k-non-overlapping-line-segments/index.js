var dp = [];

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function (n, k) {
  if (n <= k) return 0;
  var dpn = (dp[n] || (dp[n] = []));
  if (dpn[k]) return dpn[k];
  if (k === 1) return dpn[k] = n * (n - 1) / 2;

  var res = 0;
  var maxLen = n - k;

  res += numberOfSets(n - 1, k);
  for (var i = 1; i <= maxLen; i++) {
    res += numberOfSets(n - i, k - 1);
  }

  return dpn[k] = res % 1000000007;
};

module.exports = numberOfSets;
