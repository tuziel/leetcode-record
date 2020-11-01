/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  var dp = [1, 1, 1, 1, 1];

  while (n--) {
    dp = [
      dp[0] + dp[1] + dp[2] + dp[3] + dp[4],
      dp[1] + dp[2] + dp[3] + dp[4],
      dp[2] + dp[3] + dp[4],
      dp[3] + dp[4],
      dp[4],
    ];
  }

  return dp[0];
};

module.exports = countVowelStrings;
