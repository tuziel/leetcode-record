/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  var len = edges.length;
  var graph = [];

  var getVal = (x) => hasApple[x];

  while (len--) {
    var edge = edges[len];
    (graph[edge[0]] || (graph[edge[0]] = [])).push(edge[1]);
  }

  function traverse(point) {
    var edge = graph[point];
    if (!edge) {
      return getVal(point) ? 2 : 0;
    }
    var i = edge.length, j = 0, k = 0;
    while (i--) {
      var node = edge[i];
      if (node !== undefined) j = traverse(node);
      if (j) k += j;
    }

    return k ? k + 2 : getVal(point) ? 2 : 0;
  }

  var res = traverse(0);
  return res ? res - 2 : 0;
};

module.exports = minTime;
