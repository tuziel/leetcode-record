/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  var dp = [0];
  dp[-1] = Infinity;
  return Math.min(...triangle.reduce((dp, curr) => {
    var i = curr.length;
    dp[i] = Infinity;
    while (i--) dp[i] = curr[i] + Math.min(dp[i], dp[i - 1]);
    return dp;
  }, dp));
};

module.exports = minimumTotal;
