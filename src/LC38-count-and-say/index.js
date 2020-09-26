/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  var dp = new Array(n + 1);
  dp[1] = '1';

  for (var i = 2; i <= n; i++) {
    var curr = dp[i - 1];
    var next = '';
    var last = curr[0];
    var count = 1;

    for (var j = 1; j <= curr.length; j++) {
      if (curr[j] === last) {
        count++;
      } else {
        next += count + last;
        last = curr[j];
        count = 1;
      }
    }

    dp[i] = next;
  }

  return dp[n];
};

module.exports = countAndSay;
