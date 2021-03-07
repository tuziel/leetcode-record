/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  var len = s.length;
  var isPalindrome = new Array(len);
  var left, right, cache;

  for (cache = 0; cache < len * 2; cache++) {
    left = (cache - 1) >> 1;
    right = cache >> 1;
    if (!isPalindrome[right]) isPalindrome[right] = new Array(len);

    while (left >= 0 && right < len) {
      if (s[left] !== s[right]) break;
      isPalindrome[left--][right++] = 1;
    }
  }

  // 到这个位置分割的最小段数
  var dp = new Array(len + 1).fill(Infinity);
  dp[0] = 0;

  for (left = 0; left < len; left++) {
    cache = dp[left] + 1;
    for (right = left; right < len; right++) {
      if (isPalindrome[left][right]) {
        if (cache < dp[right + 1]) dp[right + 1] = cache;
      }
    }
  }

  return dp[len] - 1;
};

module.exports = minCut;
