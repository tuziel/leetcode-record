/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  var len = equations.length;
  var graph = {};
  var a, b, c, i;

  // 生成相等的连通图
  for (i = 0; i < len; i++) {
    [a, c, , b] = equations[i];
    if (c === '!') continue;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(a);
    graph[a].push(b);
    graph[b].push(a);
    graph[b].push(b);
  }

  // 判断剩下的是否可以不相等
  for (i = 0; i < len; i++) {
    [a, c, , b] = equations[i];
    if (c === '=') continue;
    if (!canNotEqure(a, b)) return false;
    if (!canNotEqure(b, a)) return false;
  }

  // BFS 寻找有无冲突项
  function canNotEqure(a, b) {
    var visited = {};
    var queue = [a];
    var node;

    while (queue.length) {
      node = queue.shift();
      if (visited[node]) continue;
      visited[node] = 1;
      // a, b 已经向等，与不等式冲突
      if (node === b) return false;
      graph[node] && queue.push(...graph[node]);
    }

    return true;
  }

  return true;
};

module.exports = equationsPossible;
