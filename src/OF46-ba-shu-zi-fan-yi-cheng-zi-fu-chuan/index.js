/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  var dp = [1, 1];
  var v = 1;
  var mod;

  while (num) {
    v = 1 - v;
    mod = num % 100;
    if (10 <= mod && mod <= 25) dp[v] = dp[0] + dp[1];
    else dp[v] = dp[1 - v];
    num = num / 10 >> 0;
  }

  return dp[v];
};

module.exports = translateNum;
