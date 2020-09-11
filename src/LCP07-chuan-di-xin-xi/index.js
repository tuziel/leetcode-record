/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  var graph = new Array(n).fill(null).map(() => []);
  var dp = new Array(n);
  dp[n - 1] = 1;

  for (var i = 0, l = relation.length; i < l; i++) {
    graph[relation[i][1]].push(relation[i][0]);
  }

  var queue = [n - 1];
  var count;
  while ((count = queue.length)) {
    var temp = new Array(n).fill(0);
    var traversed = new Array(n);
    while (count--) {
      var node = queue.shift();
      if (traversed[node]) continue;
      traversed[node] = node;

      graph[node].map((i) => temp[i] += dp[node]);
    }
    dp = temp;
    if (--k <= 0) break;
    queue.push(...temp.map((s, i) => s ? i : undefined).filter((i) => i !== undefined));
  }

  return dp[0] || 0;
};

module.exports = numWays;
