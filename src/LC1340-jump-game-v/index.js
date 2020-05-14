/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function (arr, d) {
  var len = arr.length;
  var dp = new Array(len);
  var result = 1;

  var min = (a, b) => a < b ? a : b;
  var max = (a, b) => a > b ? a : b;

  function dfs(iNode, left, right) {
    var vNode = arr[iNode];
    if (dp[iNode]) return dp[iNode];

    var deep = 0;
    var curr = iNode;
    var end = max(left, iNode - d);
    var i = [];
    var m = 0;

    // 找左边
    while (end <= --curr) {
      // 碰壁
      if (arr[curr] >= vNode) break;
      // 新的峰值
      if (arr[curr] > m) {
        i = [curr];
        m = arr[curr];
      }
      // 可能存在多个峰
      if (arr[curr] === m) i.push(curr);
    }
    deep = i.reduce((d, n) => max(d, dfs(n, left, iNode - 1)), deep);

    // 找右边
    curr = iNode;
    end = min(iNode + d, right);
    i = [];
    m = 0;
    while (++curr <= end) {
      if (arr[curr] >= vNode) break;
      if (arr[curr] > m) {
        i = [curr];
        m = arr[curr];
      }
      if (arr[curr] === m) i.push(curr);
    }
    deep = i.reduce((d, n) => max(d, dfs(n, iNode + 1, right)), deep);

    // 更新缓存
    deep++;
    result = max(result, deep);
    return dp[iNode] = deep;
  }

  var index = len--;
  while (index--) result = max(result, dfs(index, 0, len));

  return result;
};

module.exports = maxJumps;
