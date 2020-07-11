/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  var dp = [];

  function f(m) {
    if (dp[m] !== undefined) return dp[m];

    var res = true;
    var i = Math.sqrt(m) >> 0;
    var j;

    while (i) {
      j = Math.pow(i--, 2);
      if (m === j) return dp[m] = true;
      res = res && f(m - j);
    }

    return dp[m] = !res;
  }

  return f(n);
};

module.exports = winnerSquareGame;
