/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function (N, K, W) {
  var len = K + W;
  if (len - 1 < N) return 0;
  var dp = new Array(len).fill(0);
  var denominator = 1;
  var res = 1;
  var i, j, k, x, next, left, right;

  dp[0] = 1;
  for (i = 0; i < K; i++) {
    denominator *= W;
    // 计算获得分数的概率
    next = new Array(len);
    x = 0;
    left = right = i;
    for (j = W; j--;) {
      x += dp[right++];
      next[right] = x;
    }
    while (right < len - 1) {
      x -= dp[left++];
      x += dp[right++];
      next[right] = x;
    }

    // 计算大于 N 部分的概率和
    for (j = N + 1, k = 0; j < len; k += next[j++]);
    // 清空不进入下一轮运算的分数
    while (j-- > K) next[j] = 0;
    dp = next;

    // 计算不超过 N 的概率
    if (denominator > Number.MAX_VALUE) return res;
    res -= k / denominator;
  }

  return res;
};

module.exports = new21Game;
