/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  var dp = new Array(m).fill(1);

  while (--n) {
    for (var i = 1; i < m; i++) dp[i] += dp[i - 1];
  }

  return dp.pop();
};

module.exports = uniquePaths;
