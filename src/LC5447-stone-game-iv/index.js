/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  var dp = [];

  function f(m) {
    if (dp[m] !== undefined) return dp[m];

    var i = Math.sqrt(m) >> 0;

    while (i) {
      var j = Math.pow(i--, 2);
      if (m === j || !f(m - j)) return dp[m] = true;
    }

    return dp[m] = false;
  }

  return f(n);
};

module.exports = winnerSquareGame;
