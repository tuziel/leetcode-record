/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function (words, target) {
  var len = words[0].length;
  var counter = new Array(len);
  words.forEach((word) => {
    for (var i = 0; i < len; i++) {
      var map = counter[i] || (counter[i] = {});
      map[word[i]] = -~map[word[i]];
    }
  });

  len = target.length;
  var dp = new Array(len).fill(0);
  counter.forEach((map) => {
    var i = len;
    while (--i) dp[i] = (dp[i] + dp[i - 1] * (map[target[i]] || 0)) % 1000000007;
    dp[0] += map[target[0]] || 0;
  });

  return dp.pop();
};

module.exports = numWays;
