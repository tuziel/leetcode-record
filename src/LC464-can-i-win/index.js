/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  // 直接获胜
  if (maxChoosableInteger >= desiredTotal) return true;

  // 全部拿完也无法到达
  var sum = maxChoosableInteger * (maxChoosableInteger + 1) / 2;
  if (desiredTotal > sum) return false;

  // 记忆化
  var dp = {};

  /**
   * @param {number} total 剩余的数量
   * @param {number} state 使用二进制位表示抽过的状态
   */
  function f(total, state) {
    // 使用整形作为 key，最高 20 + 9 位，不超过整形范围
    // 其实每个 state 都对应唯一的 total，所以直接用 state 作 key 也没问题
    // 但是为什么运行时间反而涨了 50%
    var key = (state << 9) + total;
    // 有缓存
    if (dp[key] !== undefined) return dp[key];

    for (var i = 1; i <= maxChoosableInteger; i++) {
      var curr = 1 << i;
      // 已经抽过这个数
      if (curr & state) continue;
      // 直接获胜
      if (i >= total) return dp[key] = true;
      // 可以让对方输
      if (!f(total - i, state | curr)) return dp[key] = true;
    }

    // 没有任何让对方输的方法
    return dp[key] = false;
  }

  return f(desiredTotal, 0);
};

module.exports = canIWin;
