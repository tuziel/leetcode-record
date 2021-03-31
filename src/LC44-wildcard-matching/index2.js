/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  var lenS = s.length;
  var lenP = p.length;
  var i, j, per, temp;

  var dp = new Array(lenS + 1).fill(false);
  dp[0] = true;

  for (i = 1; i <= lenP; i++) {
    per = dp[0];
    if (p[i - 1] !== '*') dp[0] = false;

    for (j = 1; j <= lenS; j++) {
      temp = dp[j];

      if (p[i - 1] === s[j - 1] || p[i - 1] === '?') {
        dp[j] = per;
      } else if (p[i - 1] === '*') {
        dp[j] = dp[j] || dp[j - 1];
      } else {
        dp[j] = false;
      }

      per = temp;
    }
  }

  return dp.pop();
};

module.exports = isMatch;
