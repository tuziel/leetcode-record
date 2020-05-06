/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  var last = days.length - 1;
  var end = days[last];
  var index = end + 1;
  var a = costs[0];
  var b = costs[1];
  var c = costs[2];
  var dp = new Array(end);

  var min = (a, b) => a < b ? a : b;
  var getDp = (i) => i <= end ? dp[i] : 0;

  while (--index) {
    if (days[last] < index) {
      // 不需要出行
      dp[index] = getDp(index + 1);
    } else {
      // 需要出行
      dp[index] = min(min(a + getDp(index + 1), b + getDp(index + 7)), c + getDp(index + 30));
      last--;
    }
  }

  return dp[days[0]];
};

module.exports = mincostTickets;
