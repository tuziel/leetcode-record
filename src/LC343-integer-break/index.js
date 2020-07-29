/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n <= 3) return n - 1;

  var dp = [0, 1, 2, 3];

  var left, right, max;
  for (var i = 4; i <= n; i++) {
    left = max = 0;
    right = i;
    while (++left <= --right) max = Math.max(max, dp[left] * dp[right]);
    dp[i] = max;
  }

  return dp[n];
};

module.exports = integerBreak;
