/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
  var n = edges.length;
  var graph = new Array(n + 1);
  var traversed = new Array(n + 1).fill(0);
  var i, from, to, targets, edge;

  for (i = 0; i < n; i++) {
    [from, to] = edges[i];
    if (!graph[from]) graph[from] = [];
    (graph[to] || (graph[to] = [])).push(from);
  }

  for (i = n - 1; i >= 0; i--) {
    to = edges[i][1];
    if ((targets = graph[to]).length <= 1) continue;

    from = targets[0];
    traversed[to] = 1;
    while ((edge = graph[from]).length === 1) {
      if (traversed[from]) return [targets[0], to];
      traversed[from]++;
      from = edge[0];
    }

    if (traversed[from]) return [targets[0], to];
    return [targets[1], to];
  }

  for (i = n - 1; i >= 0; i--) {
    [from, to] = edges[i];
    traversed[from] = traversed[to] = 1;

    while ((edge = graph[from]).length === 1) {
      if (traversed[from] > 2) {
        for (; i >= 0; i--) {
          [from, to] = edges[i];
          if (traversed[from] > 1 && traversed[to] > 1) return [from, to];
        }
      }
      traversed[from]++;
      from = edge[0];
    }
  }
};

module.exports = findRedundantDirectedConnection;
