/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  var dp = new Array(n);
  dp[0] = dp[1] = 1;

  for (var i = 2; i <= n; i++) {
    var a = i - 1;
    var b = i + 1 >> 1;
    var c = 0;

    while (a >= b) dp[i] += dp[a--] * dp[c++];
    dp[i] *= 2;
    if (i % 2) dp[i] += dp[a] * dp[a];
  }

  return dp[n];
};

module.exports = numTrees;
