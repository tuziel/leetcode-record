/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var dp = [1];
  for (var i = 1; i <= rowIndex; i++) {
    dp[i] = dp[i - 1] * (rowIndex - i + 1) / i;
  }
  return dp;
};

module.exports = getRow;
