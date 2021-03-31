/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  var len1 = word1.length;
  var len2 = word2.length;
  var dp = new Array(len2 + 1);
  var i, j;

  for (i = 0; i <= len2; i++) {
    dp[i] = new Array(len1 + 1);
    dp[i][0] = i;
  }
  for (i = 0; i <= len1; i++) dp[0][i] = i;

  for (i = 1; i <= len2; i++) {
    for (j = 1; j <= len1; j++) {
      if (word2[i - 1] === word1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp.pop().pop();
};

module.exports = minDistance;
