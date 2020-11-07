/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  var dp = new Array(n + 1).fill(Infinity);
  var i, j;

  dp[0] = 0;
  for (i = 1; i * i <= n; i++) dp[i * i] = 1;
  if (dp[n] === 1) return 1;

  for (i = 2; i <= n; i++) {
    if (dp[i] === 1) continue;
    for (j = 1; j < i; j++) {
      dp[i] = Math.min(dp[i], dp[j] + dp[i - j]);
    }
  }

  return dp[n];
};

module.exports = numSquares;
