/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  var dp = new Array(n);
  dp[0] = dp[1] = 1;

  function f(m) {
    if (dp[m]) return dp[m];

    var res = 0;
    var a = m - 1;
    var b = m + 1 >> 1;
    var c = 0;

    while (a >= b) res += f(a--) * f(c++);
    res *= 2;
    if (m % 2) res += f(a) * f(a);

    return res;
  }

  return f(n);
};

module.exports = numTrees;
