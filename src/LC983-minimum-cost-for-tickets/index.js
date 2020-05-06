/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  var dp = [];
  var i = 366;
  var j = days.length - 1;

  var min = (a, b) => a < b ? a : b;
  var getDp = (x) => dp[x] || 0;

  for (; --i;) {
    if (days[j] < i) {
      // 不需要出行
      dp[i] = getDp(i + 1);
    } else {
      // 需要出行
      dp[i] = min(min(costs[0] + getDp(i + 1), costs[1] + getDp(i + 7)), costs[2] + getDp(i + 30));
      j--;
    }
  }

  return dp[days[0]];
};

module.exports = mincostTickets;
