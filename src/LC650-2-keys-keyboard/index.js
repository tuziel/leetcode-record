/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  var dp = [0, 0, 2];

  function f(m) {
    if (dp[m] !== undefined) return dp[m];
    var res = m;
    var j;
    for (var i = 2; i < m; i++) {
      j = m / i;
      if (j % 1 === 0) res = Math.min(res, f(i) + j);
    }

    return dp[m] = res;
  }

  return f(n);
};

module.exports = minSteps;
