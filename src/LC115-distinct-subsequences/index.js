/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  var len1 = s.length;
  var len2 = t.length;
  var dp = new Array(len1 + 1).fill(1);
  var i, j, count, per, curr;

  for (j = 0; j < len2; j++) {
    count = 0;
    per = dp[0];
    for (i = 0; i < len1; i++) {
      curr = dp[i + 1];
      if (s[i] === t[j]) count += per;
      dp[i + 1] = count;
      per = curr;
    }
    dp[0] = 0;
  }

  return dp.pop();
};

module.exports = numDistinct;
